const PET_NAMES = {
    cat: "home_cat",
    dog: "home_dog",
    popug: "home_parrot",
    rabbit: "home_abbit",
    hamster: "home_hamster"
    };
// Тип возможных ЗНАЧЕНИЙ словаря
type TPetName = keyof typeof PET_NAMES;