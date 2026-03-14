class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The {self.brand} {self.model}'s engine starts."

    def move(self):
        return f"The {self.brand} {self.model} moves forward."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def move(self):
        return f"The car {self.brand} {self.model} drives on the road."

    def honk(self):
        return f"{self.brand} {self.model} says: Beep beep!"


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def move(self):
        return f"The motorcycle {self.brand} {self.model} speeds down the highway."

    def wheelie(self):
        return f"{self.brand} {self.model} performs a wheelie!"