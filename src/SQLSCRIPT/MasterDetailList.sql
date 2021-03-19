select pr.ProductID as ProductID, pr.Name, pr.ListPrice,pr.color,  pd.description, ppp.ProductPhotoID, psub.ProductSubcategoryID, psub.ProductCategoryID, psub.Name as SubcatName, pphh.LargePhotoFileName, prv.Rating as Rating 
from adventureworks.product pr

join adventureworks.productmodelproductdescriptionculture pmpd on pr.ProductModelID = pmpd.ProductModelID
join adventureworks.productdescription pd on pmpd.ProductDescriptionID=pd.ProductDescriptionID
join adventureworks.productproductphoto ppp on pr.ProductID = ppp.ProductID
join adventureworks.productphoto pphh on pphh.ProductPhotoID = ppp.ProductPhotoID
join adventureworks.productsubcategory psub on pr.ProductSubcategoryID = psub.ProductSubcategoryID
LEFT OUTER JOIN adventureworks.productreview prv on pr.ProductID = prv.ProductID

where pmpd.CultureID = 'en' && ppp.ProductPhotoID <> '1'
order by ProductID
