package paquetePrincipal;

import java.sql.SQLException;

public class Agenda {
    connectDB sesion;

    public Agenda() throws SQLException {
        sesion = new connectDB();
        sesion.connectToDB();
//        sesion.readDB(1);

    }
    public void disconnect() throws SQLException {
        sesion.disconnectFromBD();
    }
    //TODO CRUD
//    public void crearContacto(Contacto contacto){
//
//    }
    public void readId(int id) throws SQLException {

        sesion.readDB(id);

    }

}
