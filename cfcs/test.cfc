<cfcomponent name="test">
	<cfheader name="Access-Control-Allow-Origin" value="*" />
	<cfheader name="Access-Control-Allow-Methods" value="GET,PUT,POST,DELETE" />
	<cfheader name="Access-Control-Allow-Headers" value="Content-Type" />

	<cffunction name="getList" access="remote" returnformat="JSON" output="false">
		
		<cfset getListQuery = QueryNew('gallery_id,gallery_name,cover_image') />
		<cfset temp = QueryAddRow(getListQuery,4) />
		<cfset temp = QuerySetCell(getListQuery,'gallery_id',1,1) />
		<cfset temp = QuerySetCell(getListQuery,'gallery_name','USVTA',1) />
		<cfset temp = QuerySetCell(getListQuery,'cover_image','images/1.jpg',1) />
		<cfset temp = QuerySetCell(getListQuery,'gallery_id',2,2) />
		<cfset temp = QuerySetCell(getListQuery,'gallery_name','Monster Truck',2) />
		<cfset temp = QuerySetCell(getListQuery,'cover_image','images/2.jpg',2) />
		<cfset temp = QuerySetCell(getListQuery,'gallery_id',3,3) />
		<cfset temp = QuerySetCell(getListQuery,'gallery_name','Oval',3) />
		<cfset temp = QuerySetCell(getListQuery,'cover_image','images/3.jpg',3) />
		<cfset temp = QuerySetCell(getListQuery,'gallery_id',4,4) />
		<cfset temp = QuerySetCell(getListQuery,'gallery_name','1/12th Scale',4) />
		<cfset temp = QuerySetCell(getListQuery,'cover_image','images/4.jpg',4) />		
		
		
		<cfscript>
			serializer = new JsonSerializer()
				.asInteger("gallery_id")
				.asString("gallery_name")
				.asString("cover_image")
			;
		</cfscript>
		
		
		<cfreturn serializer.serialize(getListQuery) />
	</cffunction>


</cfcomponent>
