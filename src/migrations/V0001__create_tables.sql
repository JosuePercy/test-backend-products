CREATE TABLE IF NOT EXISTS interview.employee (
	id				INT PRIMARY KEY AUTO_INCREMENT,
    first_name		VARCHAR (100) NOT NULL,
	last_name		VARCHAR (100) NOT NULL,
    phone_number	VARCHAR (9) NOT NULL,
    address			VARCHAR (250) NOT NULL
);

CREATE TABLE IF NOT EXISTS interview.invoice (
	id						INT PRIMARY KEY AUTO_INCREMENT,
    employee_id				INT NOT NULL,
	series 					VARCHAR (250) NOT NULL ,
	correlative 			VARCHAR (50) NOT NULL,
	receiver_ruc			VARCHAR (11) NOT NULL,
	issuer_ruc				VARCHAR (11) NOT NULL,
	receiver_social_name	VARCHAR (250) NOT NULL,
	total_price				DECIMAL(10,2) NOT NULL,
	issuance_date			DATE NOT NULL
);

ALTER TABLE interview.invoice
ADD CONSTRAINT FK_invoice_employee_id_employee_id_fk
FOREIGN KEY (employee_id)
REFERENCES interview.employee(id);

CREATE TABLE IF NOT EXISTS interview.invoice_item (
	id					INT PRIMARY KEY AUTO_INCREMENT,
    invoice_id			INT NOT NULL,
    description			VARCHAR (300) NOT NULL,
    unit_price			DECIMAL(10,2) NOT NULL,
    quantity			INT NOT NULL
);

ALTER TABLE interview.invoice_item
ADD CONSTRAINT FK_invoice_item_invoice_id_invoice_id_fk
FOREIGN KEY (invoice_id)
REFERENCES interview.invoice(id);

CREATE TABLE IF NOT EXISTS interview.product (
	id 			INT AUTO_INCREMENT PRIMARY KEY,
	name 		VARCHAR(255) NOT NULL,
	description VARCHAR (225) NOT NULL,
	price 		DECIMAL(10, 2) NOT NULL
);