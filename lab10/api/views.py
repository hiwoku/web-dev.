from rest_framework import viewsets
from django.http import JsonResponse
from .models import Product, Category
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ClearInactiveProducts(APIView):
    def delete(self, request, *args, **kwargs):
        inactive_products = Product.objects.filter(is_active=False)
        count, _ = inactive_products.delete()
        
        if count > 0:
            return Response({"message": f"Удалено {count} неактивных продуктов."}, status=status.HTTP_204_NO_CONTENT)
        return Response({"message": "Неактивные продукты не найдены."}, status=status.HTTP_404_NOT_FOUND)