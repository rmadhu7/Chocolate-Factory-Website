#!/usr/bin/perl  

use DBI;
use CGI;
use CGI qw(:cgi-lib :standard);
use CGI::Cookie
##use DateTime;
$q = new CGI;


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn041',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Checkout | Bertha's</title>
    <meta http-equiv="content-type"
                		content="text/html;charset=utf-8" />
    <meta http-equiv="Content-Style-Type" content="text/css" />
	<link rel="stylesheet" type="text/css" href="/~jadrn041/proj4/index.css" />
	<link rel="stylesheet" type="text/css" href="/~jadrn041/proj4/home.css" />
	
</head>

<body>
    <div id="container">
	<h1><img src="/~jadrn041/proj4/Images/2.png" alt="Bertha's" width="50px"/> Bertha's Deluxe Chocolates</h1><br/>
	<div id="menu">
		<ul>
			<li><a href="/~jadrn041/proj4/index.html">Home</a></li>
			<li><a href="/~jadrn041/proj4/products.html">Products</a></li>
			<li><a href="/~jadrn041/proj4/aboutus.html">About Us</a></li>
			<li><a href="/~jadrn041/proj4/contact.html">Contact</a></li>
		</ul>
	</div>
    <div>
END_CONTENT
my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn041";
my $username = "jadrn041";
my $password = "pamphlet";
my $database_source = "dbi:mysql:$database:$host:$port";
my $response = "";
########################################################
### connect
my $dbh = DBI->connect($database_source, $username, $password)
or die 'Cannot connect to db';

my $dt = gmtime();
my $datedb = '12-14-2016';

my %cookies = $ENV{COOKIE};
my ($key, $value); 
%cookies = CGI::Cookie->fetch;
my $v = $q->cookie('jadrn041');   
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
	################# insert a new product
	my $statement = "INSERT INTO report values('$dt','$sku','$qty');";
	$dbh->do($statement);
    } 
     
print "<h2>Thank you for purchasing!</h2>\n";
print "<h3>Your order will be delivered within 3 business days. Happy Holidays!</h3>\n";
print "<h3>Order summary:</h3><br/>\n";
######################################################
&ReadParse(%in);                 
$name = $in{"name"};             
$street = $in{"street"};
$city = $in{"city"};
$state = $in{"state"};
$contact = $in{"contact"};
$zip = $in{"zipcode"};
print "<div><h4>\n";
print "Name: $name<br/>\n";
print "Shipping Address: $street<br/> City: $city<br/> State: $state<br/> Zipcode: $zip<br/>\n";
print "Phone: $contact<br/><br/><br/><br/><br/><br/><br/>\n";	

print "</h4></div></div>\n";
print "</body>\n";
print "</html>\n";

