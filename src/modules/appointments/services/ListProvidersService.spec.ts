import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProvers: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProvers = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the profile', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Rick Sanchez',
      email: 'ricksanchez@gmail.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Morty Smith',
      email: 'mortysmith@gmail.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Summer Smith',
      email: 'summersmith@gmail.com',
      password: '123456',
    });

    const providers = await listProvers.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
