interface User {
  id: number;
  name: string;
}

class UserDAO {
  private users: User[] = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Carlos" }
  ];

  public selectAll(): User[] {
    console.log("DAO: Obteniendo todos los usuarios");
    return this.users;
  }

  public selectById(id: number): User | undefined {
    console.log(`DAO: Buscando usuario con id ${id}`);
    return this.users.find(u => u.id === id);
  }

  public insert(user: User): void {
    console.log(`DAO: Insertando usuario ${user.name}`);
    this.users.push(user);
  }

  public update(id: number, newName: string): boolean {
    console.log(`DAO: Actualizando usuario con id ${id}`);
    const user = this.selectById(id);
    if (user) {
      user.name = newName;
      return true;
    }
    return false;
  }

  public delete(id: number): boolean {
    console.log(`DAO: Eliminando usuario con id ${id}`);
    const initialLength = this.users.length;
    this.users = this.users.filter(u => u.id !== id);
    return this.users.length < initialLength;
  }
}


// Comprobación
const userDAO = new UserDAO();
userDAO.insert({ id: 3, name: "Elena" });
console.log("Usuarios:", userDAO.selectAll());
userDAO.delete(1);
console.log("Usuarios tras borrar ID 1:", userDAO.selectAll());