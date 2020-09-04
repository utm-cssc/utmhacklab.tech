<script>
/* eslint-disable */
</script>

<style>
.content {
  max-width: 500px;
  margin: auto;
}
</style>
 
<template>
  <div class="content">
    <h1 style="font-size: 50px;"> Ask an Upper Year! </h1>
    <!-- <form action="https://formspree.io/xwkrdzyg" method="POST">-->
    	<form action="http://individual.utoronto.ca/cgi-bin/formmail.pl" method="POST">
	<input type="hidden" name="recipient" value="zain.kazmi@mail.utoronto.ca"/>
	<li style="list-style-type: none;"><label for="ask_alex">Ask Alex: TA and POST</label>
      	<input type="checkbox" name="ask alex" text="Ask Alex" id="ask_alex"/>
      	</li>
      	<li style="list-style-type: none;">
      	<label for="ask_jess">Ask Jess</label>
     	<input type="checkbox" name="Ask Jess" id="ask_jess"/>
      	</li>
      	<li style="list-style-type: none;">
     	<label for="ask_chris">Ask Chris</label>
      	<input type="checkbox" id="ask_chris" name="Ask Chris" />
      	</li>
	<li style="list-style-type: none;">
      	<label for=Question> Input your Question here </label> 
      	</li>
	<li style="list-style-type: none;">
	<textarea id="Question" name="Question" style="border-style: inset;"></textarea>
	</li>
	<li style="list-style-type: none;">
	<h2 style="font-size: 20px;">Tags:</h2>
	</li>
	<li style="list-style-type: none;">
	<label for="post">Post</label>
	<input type="checkbox" name="Post" id="post"/>
	</li>
	<li style="list-style-type: none;">	
	<label for="TA_stuff">TA stuff</label>
	<input type="checkbox" id="TA_stuff" name="TA Stuff" />
	</li>
	<li style="list-style-type: none;">
	<label for="tech">Technology</label>
	<input type="checkbox" id="tech" name="Tech"/>
	</li>
	<input type="submit" value="Submit" name="Submit"/>
	<input type="reset" value="Reset"/>
      </form>

  </div>
</template>

<script>
export default {

}
</script>
~                                                                                                                       ~                                                                                                                       ~                             
