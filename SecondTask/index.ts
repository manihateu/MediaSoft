const PET_NAMES = {
    cat: "home_cat",
    dog: "home_dog",
    popug: "home_parrot",
    rabbit: "home_abbit",
    hamster: "home_hamster"
} as const
// Тип возможных ЗНАЧЕНИЙ словаря
type kyes = keyof typeof PET_NAMES;
type TPetName = typeof PET_NAMES[kyes];
