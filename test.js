$.ajax({
	url: 'list.txt',
	dataType: 'text',
	success: function(text) {
		var sep_title = text.split('#');
		var filtered_sep_title = sep_title.filter(function(item){
			return item !== null && item !== undefined && item !== '';
		});
		console.log(filtered_sep_title);
		
		for(var i in filtered_sep_title){
			if(i <2){
				var newTitle = document.createElement("li");
				var content = filtered_sep_title[1-i].split('\n');
				newTitle.setAttribute('class', 'nav-item');
				newTitle.setAttribute('id', 'na');
				newTitle.innerHTML = "<a class=\"nav-link\" href=\"#"+content[0]+"\">"+content[0]+"</a>";
				var p = document.getElementById("p");
				p.prepend(newTitle);
			}else {
				var newTitle = document.createElement("li");
				var content = filtered_sep_title[i].split('\n');
				newTitle.setAttribute('class', 'nav-item');
				newTitle.setAttribute('id', 'na');
				newTitle.innerHTML = "<a class=\"nav-link\" href=\"#"+content[0]+"\">"+content[0]+"</a>";
				var dm = document.getElementById("dm");
				dm.appendChild(newTitle);
			}
			
			var content = filtered_sep_title[i].split('\n');
			var new_list = document.createElement("div");
			new_list.setAttribute('id', content[0]);
			var finished_content = "<div style=\"height:6vw\"></div><a id=\"han\" style=\"font-size:200%;\">제목 : "+content[0]+"<br>제작 기간 : "+content[1]+"<br>주요 기술 : "+content[2]+"</a><br><br>";
			finished_content += "<a id=\"go\">";
			for(var j = 3; j < content.length;j++) {
				if(content[j].indexOf('*') == 0){
					finished_content += "<br><img src=\"images/"+content[j].substring(1)+"\" style=\"width:80vw;\"><br><br>";
				}else if(content[j].indexOf('(') == 0){
					finished_content += "<br><a href=\""+content[j].replace("(","").replace(")","")+"\" target=\"_blank\">"+content[j]+"</a><br>";
				}else{
					finished_content += content[j] + "<br>";
				}
			}
			finished_content += "</a>";
			new_list.setAttribute('style', 'height:95vh;overflow:hidden;position:relative;');
			new_list.innerHTML = finished_content+"<p id=\""+content[0]+"_p"+"\" style =\"background-image:linear-gradient(180deg, rgba(255,255,255,0) 75%,rgba(0,0,0,0.5) 100%);width:80vw;height:100vh;position:absolute;left:0vw;top:0;\"></p>";
			var new_button = document.createElement("button");
			new_button.innerHTML = "펼치기"
			new_button.setAttribute('style','top:-5vh;');
			new_button.setAttribute('id',content[0]+"_b");
			new_button.setAttribute('onclick','div_toggle('+content[0]+')');
			var new_space = document.createElement("div");
			new_space.setAttribute('style', 'height:5vh;');
			new_space.innerHTML = " ";
			var d = document.getElementById("d");
			d.appendChild(new_list);
			d.appendChild(new_button);
			d.appendChild(new_space);
			
			
		}
	}
});



function div_toggle(i){
	if(document.getElementById(i.getAttribute('id') + "_b").innerHTML == "펼치기"){
		document.getElementById(i.getAttribute('id') + "_b").innerHTML = "접기";
		document.getElementById(i.getAttribute('id') + "_b").setAttribute('style','top:0vh;');
		document.getElementById(i.getAttribute('id') + "_p").setAttribute('style','display:none;');
		i.setAttribute('style','');
	}else{
		document.getElementById(i.getAttribute('id') + "_b").innerHTML = "펼치기";
		document.getElementById(i.getAttribute('id') + "_b").setAttribute('style','top:-5vh;');
		document.getElementById(i.getAttribute('id') + "_p").setAttribute('style','background-image:linear-gradient(180deg, rgba(255,255,255,0) 75%,rgba(0,0,0,0.5) 100%);width:80vw;height:100vh;position:absolute;left:0vw;top:0;');
		i.setAttribute('style', 'height:95vh;overflow:hidden;position:relative;');
	}
	
}

