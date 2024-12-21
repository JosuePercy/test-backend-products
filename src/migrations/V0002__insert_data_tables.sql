INSERT INTO interview.employee (first_name, last_name, phone_number, address) VALUES
('Jane', 'Smith', '987654321', '456 Elm St, Townsville'),
('Angel', 'Juan', '986764320', '468 Townsville');

INSERT INTO interview.invoice (employee_id, series, correlative, receiver_ruc, issuer_ruc, receiver_social_name, total_price, issuance_date) VALUES
(1, 'A001', '00001', '12345678901', '98765432109', 'Empresa Receptora S.A.', 1500.50, '2024-10-28'),
(2, 'B002', '00002', '11111111111', '22222222222', 'Otra Empresa S.A.C.', 850.75, '2024-10-28');

INSERT INTO interview.invoice_item (invoice_id, description, unit_price, quantity) VALUES
(1, 'Laptop Dell XPS', 1200.00, 1),
(2, 'Impresora HP LaserJet', 350.00, 1),
(2, 'Paquete de Papel A4', 6.75, 5),
(1, 'Cartucho de Tinta HP', 45.00, 3);

INSERT INTO interview.product (name, description, price) VALUES
('Apple iPhone 14', 'Latest Apple smartphone with A15 Bionic chip', 799.00),
('Samsung Galaxy S23', 'Samsung’s flagship smartphone with Snapdragon', 999.99),
('Dell XPS 13', 'Ultra-thin laptop with Intel Core i', 999.99);