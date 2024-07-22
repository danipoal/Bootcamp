package paquetePrincipal;

import java.sql.*;

public class connectDB {
    private final String BBDD;
    private final String USER;
    private final String PASSWORD;
    Connection connect;

    String black="\033[30m";
    String red="\033[31m";
    String green="\033[32m";
    String yellow="\033[33m";
    String blue="\033[34m";
    String purple="\033[35m";
    String cyan="\033[36m";
    String white="\033[37m";
    String reset="\u001B[0m";

    public connectDB(){
        this.BBDD = "jdbc:mysql://127.0.0.1:3306/agenda";
        this.USER = "root";
        this.PASSWORD = "admin";
    }
    public connectDB(String BBDD, String USER, String PASSWORD){
        this.BBDD = BBDD;
        this.USER = USER;
        this.PASSWORD = PASSWORD;
    }
    public void connectToDB() throws SQLException{
        connect = DriverManager.getConnection(BBDD, USER, PASSWORD);
        Statement sentencia = connect.createStatement();
        sentencia.executeUpdate("USE agenda;");
        System.out.println("Conexion correcta");
//        String ifExists = "CREATE DATABASE chistes;";
//        sentencia.executeUpdate(ifExists);
        sentencia.close();
    }
    public void disconnectFromBD() throws SQLException{
        try {
            if (connect != null && !connect.isClosed()) {
                connect.close();
                System.out.println("Conexión cerrada");
            }
        }catch(SQLException e) {
            e.printStackTrace();
        }
    }
    public void readDB(int id) throws SQLException {
        String sql = "SELECT * FROM agenda WHERE id_contacto = " + id +";";
        Statement statement = connect.createStatement();
        ResultSet result = statement.executeQuery(sql);
        if (result.next()){
            int idResult = result.getInt("id_contacto");
            String nombreResult = result.getString("nombre");
            String apellidoResult = result.getString("apellido");
            int telefono = result.getInt("telefono");


            System.out.printf(green + "ID: " + idResult + " - "+ nombreResult +" "+ apellidoResult +" - Telefono: " + telefono + "\n" + reset);
        }

        statement.close();
    }

}
