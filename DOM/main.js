//TODO STEP 1: first user creation
const user = {
  name: 'Takumi',
  getName() {
    console.log(user.name);
  },s
};

user.getName();

// const newUser = Object.assign({}, user)

//TODO STEP 2: 2nd user creation
const newUser = Object.assign({}, this);

newUser.name = 'Nazar';
console.log(newUser);
newUser.getName();

//TODO STEP 3: 3rd user creation
const matviy = Object.assing({}, newUser);

matviy.name = 'Matviy';
matviy.getName();
