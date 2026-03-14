from models import Vehicle, Car, Motorcycle

vehicles = []

n = int(input("How many vehicles do you want to create? "))

for i in range(n):
    print(f"\nVehicle {i+1}")
    v_type = input("Enter type (vehicle/car/motorcycle): ").lower()

    brand = input("Enter brand: ")
    model = input("Enter model: ")
    year = int(input("Enter year: "))

    if v_type == "car":
        doors = int(input("Enter number of doors: "))
        vehicle = Car(brand, model, year, doors)

    elif v_type == "motorcycle":
        sidecar_input = input("Has sidecar? (yes/no): ").lower()
        has_sidecar = True if sidecar_input == "yes" else False
        vehicle = Motorcycle(brand, model, year, has_sidecar)

    else:
        vehicle = Vehicle(brand, model, year)

    vehicles.append(vehicle)



for v in vehicles:
    print(v)
    print(v.start_engine())
    print(v.move()) 

    if isinstance(v, Car):
        print(v.honk())

    if isinstance(v, Motorcycle):
        print(v.wheelie())

    print()