class rope{
	constructor(body1,body2,pointA,pointB)

	{
this.pointA=pointA
this.pointB=pointB
      var options={
		  bodyA:body1,
		 bodyB:body2,
		  pointB:{x:this.pointA,y:this.pointB}
	  }
	//create rope constraint here
	World.add(world,roof);
	con = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyA:ball1,
		pointB:{x:0,y:0}
	  });
	  World.add(world,con);
	}

	
    //create display() here 
display()
	{
con.display()
	}

}
