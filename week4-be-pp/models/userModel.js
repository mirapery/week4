// data model

// {
//     "name": "Matti Seppänen",
//     "email": "matti@example.com",
//     "password": "M@45mtg$",
//     "phone_number": "+358401234567",
//     "gender": "Male",
//     "date_of_birth": "2000-01-15",
//     "membership_status": "Active"
//   }

let userArray = [];
let nextId = 1;

const getAll = () => {
    return userArray;
};

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) => {
    if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
        return false;
    }
    const newUser = {
        id: nextId++,
        name: name,
        email: email,
        password: password,
        phone_number: phone_number,
        gender: gender,
        date_of_birth: date_of_birth,
        membership_status: membership_status,
    };
    userArray.push(newUser);
    return(newUser);
};

const findById = (id) => {
    const user = userArray.find((user) => user.id === Number(id));
    if (user) {
        return user;
    } else return false;
};

const updateOneById = (id, updatedData) => {
    const user = findById(id);
    if (user) {
        if (updatedData.name) {
            user.name = updatedData.name;
        }
        if (updatedData.email) {
            user.email = updatedData.email;
        }
        if (updatedData.password) {
            user.password = updatedData.password;
        }
        if (updatedData.phone_number) {
            user.phone_number = updatedData.phone_number;
        }
        if (updatedData.gender) {
            user.gender = updatedData.gender;
        }
        if (updatedData.date_of_birth) {
            user.date_of_birth = updatedData.date_of_birth;
        }
        if (updatedData.membership_status) {
            user.membership_status = updatedData.membership_status;
        }
        return user;
    }
    return false;
};

const deleteOneById = (id) => {
    const user = findById(id);
    if (user) {
        const initialLenght = userArray.length;
        userArray = userArray.filter((user) => user.id !== Number(id));
        return userArray.length < initialLenght;
    } else return false;
};

if (require.main === module) {

    let result = addOne("Alice User", "alice@mail.com", "password123", "123456789", "Female", "2000-01-01", "Active");
    console.log(result);

    result = addOne("Bob Admin", "bob@mail.com", "password123", "123456789", "Male", "2000-01-01", "Active");
    console.log(result);

    console.log('getAll called:', getAll());

    console.log(`getOneById called: ${getOneById(1)}`);

    console.log(`updateOneById called: ${updateOneById(1, {name: "Anna User", email: "anna@mail.com"})}`);
    console.log(`getOneById called after user updated: ${getOneById(1)}`);

    console.log(`deleteById called: ${deleteOneById(1)}`);
    console.log(`getOneById called after user deleted: ${getOneById(1)}`);
}

module.exports = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
};