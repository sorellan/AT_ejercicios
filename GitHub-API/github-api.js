var github;
var repoHTML = "<input type='text' name='user' value='name' " +
    "id='user' size='10' />" +
    "<input type='text' name='repo' value='repo' " +
    "id='repo' size='10' />" +
    "<button type='button'>Search repo data</button>";

function getRepo() {
	var username = $("#user").val();
    var reponame = $("#repo").val();
    var repo = github.getRepo(username, reponame);

    repo.show(function(err, repo) {
    	var results = $("#results");
    	if(err) {
    		results.html("<p>Error: " + err.error + "</p>");
    	} else {
    		results.html("<p><b>Repo data:</b><p>" +
    			"<ul><li>Full name: " + repo.full_name + "</li>" +
    			"<li>Description: " + repo.description + "</li>" +
    			"<li>Created at: " + repo.created_at + "</li>" +
    			"<li>Html url: <a href='" + repo.html_url + "'>" + repo.html_url + "</li>");
    	}
    });
};

function getToken() {
	var tok = $("#token").val();
	console.log(tok);
	github = new Github({
  		token: tok,
  		auth: "oauth"
	});
	$("#form_repo").html(repoHTML);
	$("#form_repo button").click(getRepo);
};

jQuery(document).ready(function() {
	$("div#form button").click(getToken);	
});



