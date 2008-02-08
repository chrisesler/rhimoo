import java.sql.*;

public class JsConnection {
    public JsConnection() {}

    public Connection open(String host, String database, String username, String password) {
      Connection c = null;
      try {
          Class.forName("com.mysql.jdbc.Driver").newInstance(); // What does this next line do?
          c = DriverManager.getConnection("jdbc:mysql://" + host + "/" + database, username, password);
          return c;
      }
      catch (Exception e) {
          return null;
      }
    }
        
    public void close(Connection c) {
      try {
        c.close();
      }
      catch (Exception e) {}
    }
}
