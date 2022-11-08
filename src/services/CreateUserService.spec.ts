import { CreateUserSerice } from './CreateUserService'

describe('Create User', () => {
  it('should be able to create a new user', async () => {
    const createUser = new CreateUserSerice()
    const user = await createUser.execute({
      name: 'user1',
      email: 'user1@gmail.com',
      password: 'teste123',
    })

    expect(user.email).toBe('user1@gmail.com')
  })

  // it('should not be able to create two users with the same email', () => {
  //   expect(1 + 2).toBe(3)
  // })
})
