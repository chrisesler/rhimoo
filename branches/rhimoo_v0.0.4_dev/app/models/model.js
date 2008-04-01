var DATABASE = {

    database: 'blog_development',
    host: 'localhost',
    //username: 'rhimodba',
    //password: 'abc123'
	username: 'root',
    password: ''

};

function ArticleModel(properties) {
  for (var p in properties) {
    this[p] = properties[p];
  }
}

ArticleModel.findAll = function() {
    var results = [];
    
    var jsConnectionObj = new Packages.JsConnection();
    c = jsConnectionObj.open(DATABASE.host,
                             DATABASE.database,
                             DATABASE.username,
                             DATABASE.password);
 
    if (c) {
      var s = c.createStatement();
      s.executeQuery("SELECT * FROM articles;");
      var rs = s.getResultSet();
      while (rs.next()) {
          results.push(new ArticleModel({
            id: rs.getInt("id"),
            title: rs.getString("title"),
            body: rs.getString("body")
          }));
      }
      rs.close();
      c.close();  
      return results;
    }

    throw new Error('could not connect to database');      
};
