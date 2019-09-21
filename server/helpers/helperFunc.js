export default (NewUser) => {
  const user = {
    id: NewUser.id,
    firstname: NewUser.firstname,
    lastname: NewUser.lastname,
    gender: NewUser.gender,
    jobtitle: NewUser.jobTitle,
    depart: NewUser.depart,
    email: NewUser.email,
    address: NewUser.address,
    admin: NewUser.admin,
    token: NewUser.token,
  };
  return user;
};
