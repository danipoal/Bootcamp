package paquetePrincipal;

import java.sql.SQLException;

public class Agenda {
    connectDB sesion;

    public Agenda() throws SQLException {
        sesion = new connectDB();
        sesion.connectToDB();

    }
    public void disconnect() throws SQLException {
        sesion.disconnectFromBD();
    }
    //TODO CRUD
    public void addContacto(String nombre, String apellido, String numero) throws SQLException{
        Contacto newContacto = new Contacto(nombre, apellido, numero);
        sesion.createRow(newContacto);
    }
    public void readId(int id) throws SQLException {
        System.out.println(sesion.readDB(id));
    }
    public void readAll() throws SQLException{
        //Saco la tabla entera y la recorro para imprimirla
        String[] table = sesion.readAllDB();
        for (int i = 0; i < table.length; i++) {
            System.out.print(table[i]);
        }
    }

}
