var github;
var repoHTML = "<input type='text' name='user' " +
+    "id='user' size='10' />" +
+    "<input type='text' name='repo' " +
+    "id='repo' size='10' />" +
+    "<button type='button'>Search repo data</button>";

function add_token() {
		github = new Github({
  			token: $('#token').val(),
  			auth: "oauth"
		});
		$('#form_repo').html(repoHTML);
	}

jQuery(document).ready(function() {

	$('#buttoken').click(add_token);
	

	

	
});



