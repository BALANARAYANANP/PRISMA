import StudentServices from "../Services/userService";
import { Studentdto } from "../dto/student";


describe("User Service",  () => {
  it("Should create a new User", async () => {
    const user = await StudentServices.createUser({
      email: "bala@gmail.com",
      name: "bala",
      age: 32,
      isAlive: true,
      lname: "narayanan",
    });
    expect(user.lname).toBe("narayanan")
    
  });
  it('get user by id', async () =>{
    const user= await StudentServices.getOneUser({id:13})
    expect(user?.name).toBe('demo')
  })
});
