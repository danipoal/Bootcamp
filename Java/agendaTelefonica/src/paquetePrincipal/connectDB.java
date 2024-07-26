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
    public void createRow(Contacto contacto) throws SQLException{
        String sql = "INSERT INTO `agenda`.`agenda` (`nombre`, `apellido`, `telefono`) VALUES ("+contacto.getNombre() + ", "+contacto.getApellido()+", "+contacto.getTelefono()+");";
        Statement statement = connect.createStatement();
        int rowInserted = statement.executeUpdate(sql);
        if (rowInserted <= 0) {
            System.err.println("Error al introducir la sentencia sql");
        }
    }
    public String readDB(int id) throws SQLException {
        String sql = "SELECT * FROM agenda WHERE id_contacto = " + id +";";
        Statement statement = connect.createStatement();
        ResultSet result = statement.executeQuery(sql);
        if (result.next()){
            int idResult = result.getInt("id_contacto");
            String nombreResult = result.getString("nombre");
            String apellidoResult = result.getString("apellido");
            int telefono = result.getInt("telefono");
            statement.close();
            return new String(purple + "ID: " + idResult + " - "+ nombreResult +" "+ apellidoResult +" - Telefono: " + telefono + "\n" + reset);
        }else{
            statement.close();
            return "";
        }
    }
    public String[] readAllDB() throws SQLException{
        String sql = "SELECT * FROM agenda";
        Statement statement = connect.createStatement(
                ResultSet.TYPE_SCROLL_INSENSITIVE,
                ResultSet.CONCUR_READ_ONLY);
        //El tipo de Statement permite al cursor ir de adelante a atras
        ResultSet result = statement.executeQuery(sql);

        //Encontramos el tamaño que usaremos para el array
        result.last(); // Mover el cursor al final
        int rowCount = result.getRow(); //Encontramos la ultima fila
        String[] resultString = new String[rowCount];
        result.beforeFirst(); //Devolvemos el valor al principio para procesar
        rowCount = 0;
        while(result.next()){
            int idResult = result.getInt("id_contacto");
            String nombreResult = result.getString("nombre");
            String apellidoResult = result.getString("apellido");
            int telefono = result.getInt("telefono");

            resultString[rowCount] = new String(purple + "ID: " + idResult + " - "+ nombreResult +" "+ apellidoResult +" - Telefono: " + telefono + "\n" + reset);
            rowCount++;
        }



        return resultString;
    }

}
