INSERT INTO department (id, department_name)
VALUES (1, 'HR'),
       (2, 'Engineering'),
       (3, 'Sales'),
       (4, 'Data Science'),
       (5, 'Web Development'),
       (6, 'Management'),
       (7, 'Legal'),
       (8, 'Information technolog'),
       (9, 'Finance'),
       (10, 'Public Relations');

-- 
INSERT INTO roles (id, title, salary, role_id)
VALUES (1, 'HR Team Lead', 60000, 1),
       (2, 'International Data Supervisor', 76000, 2),
       (3, 'Direct Solutions Manager', 56000, 3),
       (4, 'Forward Program Associate', 40000, 3),
       (5, 'Dynamic Data Producer', 55600, 4),
       (6, 'Interactive Team Orchestrator',  44576, 1),
       (7, 'Product Integration', 135894, 10),
       (8, 'Corporate Engineer', 290000, 2),
       (9, 'Product Integration', 465475, 3),
       (10, 'Relational App Manager', 156878, 3),
       (11, 'District App Executive', 156886, 7),
       (12, 'Identity Planner', 75678, 10),
       (13, 'Direct Quality Administrator', 34657, 6),
       (14, 'Forward Direct Facilitator', 476865, 6),
       (15, 'Internal Res Coordinator', 65756, 7),
       (16, 'Direct Quality Manager', 788678, 3),
       (17, 'Interactive Team Designer', 135894, 2),
       (18, 'Investor Mobility Associate', 135894, 1),
       (19, 'Regional Intranet Analyst', 135894, 3),
       (20, 'Internal Response Assistant', 135894, 9),
       (21, 'Dynamic Inter Officer', 135894, 8),
       (22, 'Intern Ideation Director', 135894, 7),
       (23, 'Intern Web Designer', 135894, 6),
       (24, 'Global Operations Analyst', 135894, 5),
       (25, 'Principal Ideation Engineer', 1358934, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(1, 'Bryanna', 'Margie', 1, 9),
(2, 'Indiana', 'Frankie', 2, 8),
(3, 'Ronnie', 'Leighton', 3, 7),
(4, 'Bryanna', 'Margie', 4, 6),
(5, 'Franny', 'Dale', 5, 5),
(6, 'Evelyn', 'Shelly', 6, null),
(7, 'Teddie', 'Val', 7, null),
(8, 'Lavern', 'Terry', 8, 1),
(9, 'Esme', 'Toby', 9, 6),
(10, 'Jayme', 'Hildred', 10, 4),
(11, 'Arden', 'Emery', 1, 1),
(12, 'Jules', 'Lennie', 9, 5),
(13, 'Jools', 'Quinn', 2, 2),
(14, 'Blair', 'Gerry', 8, 8),
(15, 'Beau', 'Mags', 3, 4),
(16, 'Hill', 'Pine', 7, 7);
  
SELECT * FROM department;
SELECT * FROM employee;
SELECT * FROM roles;