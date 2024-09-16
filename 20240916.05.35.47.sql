--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.4 (Debian 16.4-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: practicum2425; Type: SCHEMA; Schema: -; Owner: brycecoon_25
--

CREATE SCHEMA practicum2425;


ALTER SCHEMA practicum2425 OWNER TO brycecoon_25;

--
-- Name: status; Type: TYPE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE TYPE practicum2425.status AS ENUM (
    'ACTIVE',
    'ARCHIVED',
    'COMPLETED'
);


ALTER TYPE practicum2425.status OWNER TO brycecoon_25;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: company; Type: TABLE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE TABLE practicum2425.company (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE practicum2425.company OWNER TO brycecoon_25;

--
-- Name: company_id_seq; Type: SEQUENCE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE SEQUENCE practicum2425.company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE practicum2425.company_id_seq OWNER TO brycecoon_25;

--
-- Name: company_id_seq; Type: SEQUENCE OWNED BY; Schema: practicum2425; Owner: brycecoon_25
--

ALTER SEQUENCE practicum2425.company_id_seq OWNED BY practicum2425.company.id;


--
-- Name: company_project; Type: TABLE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE TABLE practicum2425.company_project (
    id integer NOT NULL,
    company_id integer,
    project_id integer
);


ALTER TABLE practicum2425.company_project OWNER TO brycecoon_25;

--
-- Name: company_project_id_seq; Type: SEQUENCE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE SEQUENCE practicum2425.company_project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE practicum2425.company_project_id_seq OWNER TO brycecoon_25;

--
-- Name: company_project_id_seq; Type: SEQUENCE OWNED BY; Schema: practicum2425; Owner: brycecoon_25
--

ALTER SEQUENCE practicum2425.company_project_id_seq OWNED BY practicum2425.company_project.id;


--
-- Name: employee; Type: TABLE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE TABLE practicum2425.employee (
    id integer NOT NULL,
    name character varying(50),
    pay_rate numeric
);


ALTER TABLE practicum2425.employee OWNER TO brycecoon_25;

--
-- Name: employee_id_seq; Type: SEQUENCE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE SEQUENCE practicum2425.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE practicum2425.employee_id_seq OWNER TO brycecoon_25;

--
-- Name: employee_id_seq; Type: SEQUENCE OWNED BY; Schema: practicum2425; Owner: brycecoon_25
--

ALTER SEQUENCE practicum2425.employee_id_seq OWNED BY practicum2425.employee.id;


--
-- Name: employee_shift; Type: TABLE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE TABLE practicum2425.employee_shift (
    id integer NOT NULL,
    start_time character varying(20),
    end_time character varying(20),
    emp_id integer,
    shift_id integer
);


ALTER TABLE practicum2425.employee_shift OWNER TO brycecoon_25;

--
-- Name: employee_shift_id_seq; Type: SEQUENCE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE SEQUENCE practicum2425.employee_shift_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE practicum2425.employee_shift_id_seq OWNER TO brycecoon_25;

--
-- Name: employee_shift_id_seq; Type: SEQUENCE OWNED BY; Schema: practicum2425; Owner: brycecoon_25
--

ALTER SEQUENCE practicum2425.employee_shift_id_seq OWNED BY practicum2425.employee_shift.id;


--
-- Name: project; Type: TABLE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE TABLE practicum2425.project (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    location character varying(50) NOT NULL,
    start_date character varying(20),
    end_date character varying(20),
    status character varying(16),
    CONSTRAINT check_status CHECK (((status)::text = ANY ((ARRAY['ACTIVE'::character varying, 'COMPLETED'::character varying, 'ARCHIVED'::character varying])::text[]))),
    CONSTRAINT status CHECK (((status)::text = ANY ((ARRAY['ACTIVE'::character varying, 'COMPLETED'::character varying, 'ARCHIVED'::character varying])::text[])))
);


ALTER TABLE practicum2425.project OWNER TO brycecoon_25;

--
-- Name: project_id_seq; Type: SEQUENCE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE SEQUENCE practicum2425.project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE practicum2425.project_id_seq OWNER TO brycecoon_25;

--
-- Name: project_id_seq; Type: SEQUENCE OWNED BY; Schema: practicum2425; Owner: brycecoon_25
--

ALTER SEQUENCE practicum2425.project_id_seq OWNED BY practicum2425.project.id;


--
-- Name: project_shift; Type: TABLE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE TABLE practicum2425.project_shift (
    id integer NOT NULL,
    project_id integer,
    shift_id integer
);


ALTER TABLE practicum2425.project_shift OWNER TO brycecoon_25;

--
-- Name: project_shift_id_seq; Type: SEQUENCE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE SEQUENCE practicum2425.project_shift_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE practicum2425.project_shift_id_seq OWNER TO brycecoon_25;

--
-- Name: project_shift_id_seq; Type: SEQUENCE OWNED BY; Schema: practicum2425; Owner: brycecoon_25
--

ALTER SEQUENCE practicum2425.project_shift_id_seq OWNED BY practicum2425.project_shift.id;


--
-- Name: shift; Type: TABLE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE TABLE practicum2425.shift (
    id integer NOT NULL,
    start_time character varying(20),
    end_time character varying(20),
    description character varying(200),
    location character varying(50),
    requested_employees integer,
    status character varying(16),
    CONSTRAINT check_status CHECK (((status)::text = ANY ((ARRAY['ACTIVE'::character varying, 'COMPLETED'::character varying, 'ARCHIVED'::character varying])::text[])))
);


ALTER TABLE practicum2425.shift OWNER TO brycecoon_25;

--
-- Name: shift_id_seq; Type: SEQUENCE; Schema: practicum2425; Owner: brycecoon_25
--

CREATE SEQUENCE practicum2425.shift_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE practicum2425.shift_id_seq OWNER TO brycecoon_25;

--
-- Name: shift_id_seq; Type: SEQUENCE OWNED BY; Schema: practicum2425; Owner: brycecoon_25
--

ALTER SEQUENCE practicum2425.shift_id_seq OWNED BY practicum2425.shift.id;


--
-- Name: company id; Type: DEFAULT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.company ALTER COLUMN id SET DEFAULT nextval('practicum2425.company_id_seq'::regclass);


--
-- Name: company_project id; Type: DEFAULT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.company_project ALTER COLUMN id SET DEFAULT nextval('practicum2425.company_project_id_seq'::regclass);


--
-- Name: employee id; Type: DEFAULT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.employee ALTER COLUMN id SET DEFAULT nextval('practicum2425.employee_id_seq'::regclass);


--
-- Name: employee_shift id; Type: DEFAULT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.employee_shift ALTER COLUMN id SET DEFAULT nextval('practicum2425.employee_shift_id_seq'::regclass);


--
-- Name: project id; Type: DEFAULT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.project ALTER COLUMN id SET DEFAULT nextval('practicum2425.project_id_seq'::regclass);


--
-- Name: project_shift id; Type: DEFAULT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.project_shift ALTER COLUMN id SET DEFAULT nextval('practicum2425.project_shift_id_seq'::regclass);


--
-- Name: shift id; Type: DEFAULT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.shift ALTER COLUMN id SET DEFAULT nextval('practicum2425.shift_id_seq'::regclass);


--
-- Data for Name: company; Type: TABLE DATA; Schema: practicum2425; Owner: brycecoon_25
--

COPY practicum2425.company (id, name) FROM stdin;
1	Sample Company A
2	Sample Company B
3	Sample Company C
\.


--
-- Data for Name: company_project; Type: TABLE DATA; Schema: practicum2425; Owner: brycecoon_25
--

COPY practicum2425.company_project (id, company_id, project_id) FROM stdin;
1	1	1
2	2	2
3	3	3
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: practicum2425; Owner: brycecoon_25
--

COPY practicum2425.employee (id, name, pay_rate) FROM stdin;
1	John Doe	25.00
2	Jane Smith	30.00
3	Alice Johnson	28.00
4	Bob Brown	22.00
\.


--
-- Data for Name: employee_shift; Type: TABLE DATA; Schema: practicum2425; Owner: brycecoon_25
--

COPY practicum2425.employee_shift (id, start_time, end_time, emp_id, shift_id) FROM stdin;
1	2024-09-01 08:00:00	2024-09-01 16:00:00	1	1
2	2024-09-01 08:00:00	2024-09-01 16:00:00	2	1
3	2024-09-01 16:00:00	2024-09-01 00:00:00	3	2
4	2024-09-01 16:00:00	2024-09-01 00:00:00	4	2
5	2024-09-02 00:00:00	2024-09-02 08:00:00	1	3
\.


--
-- Data for Name: project; Type: TABLE DATA; Schema: practicum2425; Owner: brycecoon_25
--

COPY practicum2425.project (id, name, location, start_date, end_date, status) FROM stdin;
1	Sample Project A	New York	\N	\N	\N
2	Sample Project B	Los Angeles	\N	\N	\N
3	Sample Project C	Chicago	\N	\N	\N
\.


--
-- Data for Name: project_shift; Type: TABLE DATA; Schema: practicum2425; Owner: brycecoon_25
--

COPY practicum2425.project_shift (id, project_id, shift_id) FROM stdin;
1	1	1
2	2	2
3	3	3
\.


--
-- Data for Name: shift; Type: TABLE DATA; Schema: practicum2425; Owner: brycecoon_25
--

COPY practicum2425.shift (id, start_time, end_time, description, location, requested_employees, status) FROM stdin;
2	2024-09-01 16:00:00	2024-09-01 00:00:00	Evening Shift	Chicago	3	\N
3	2024-09-02 00:00:00	2024-09-02 08:00:00	Night Shift	Los Angeles	4	\N
1	2024-09-01 08:00:00	2024-09-01 16:00:00	Morning Shift	New York	5	ACTIVE
\.


--
-- Name: company_id_seq; Type: SEQUENCE SET; Schema: practicum2425; Owner: brycecoon_25
--

SELECT pg_catalog.setval('practicum2425.company_id_seq', 3, true);


--
-- Name: company_project_id_seq; Type: SEQUENCE SET; Schema: practicum2425; Owner: brycecoon_25
--

SELECT pg_catalog.setval('practicum2425.company_project_id_seq', 3, true);


--
-- Name: employee_id_seq; Type: SEQUENCE SET; Schema: practicum2425; Owner: brycecoon_25
--

SELECT pg_catalog.setval('practicum2425.employee_id_seq', 4, true);


--
-- Name: employee_shift_id_seq; Type: SEQUENCE SET; Schema: practicum2425; Owner: brycecoon_25
--

SELECT pg_catalog.setval('practicum2425.employee_shift_id_seq', 5, true);


--
-- Name: project_id_seq; Type: SEQUENCE SET; Schema: practicum2425; Owner: brycecoon_25
--

SELECT pg_catalog.setval('practicum2425.project_id_seq', 3, true);


--
-- Name: project_shift_id_seq; Type: SEQUENCE SET; Schema: practicum2425; Owner: brycecoon_25
--

SELECT pg_catalog.setval('practicum2425.project_shift_id_seq', 3, true);


--
-- Name: shift_id_seq; Type: SEQUENCE SET; Schema: practicum2425; Owner: brycecoon_25
--

SELECT pg_catalog.setval('practicum2425.shift_id_seq', 3, true);


--
-- Name: company company_pkey; Type: CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);


--
-- Name: company_project company_project_pkey; Type: CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.company_project
    ADD CONSTRAINT company_project_pkey PRIMARY KEY (id);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- Name: employee_shift employee_shift_pkey; Type: CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.employee_shift
    ADD CONSTRAINT employee_shift_pkey PRIMARY KEY (id);


--
-- Name: project project_pkey; Type: CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.project
    ADD CONSTRAINT project_pkey PRIMARY KEY (id);


--
-- Name: project_shift project_shift_pkey; Type: CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.project_shift
    ADD CONSTRAINT project_shift_pkey PRIMARY KEY (id);


--
-- Name: shift shift_pkey; Type: CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.shift
    ADD CONSTRAINT shift_pkey PRIMARY KEY (id);


--
-- Name: company_project company_project_company_id_fkey; Type: FK CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.company_project
    ADD CONSTRAINT company_project_company_id_fkey FOREIGN KEY (company_id) REFERENCES practicum2425.company(id);


--
-- Name: company_project company_project_project_id_fkey; Type: FK CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.company_project
    ADD CONSTRAINT company_project_project_id_fkey FOREIGN KEY (project_id) REFERENCES practicum2425.project(id);


--
-- Name: employee_shift employee_shift_emp_id_fkey; Type: FK CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.employee_shift
    ADD CONSTRAINT employee_shift_emp_id_fkey FOREIGN KEY (emp_id) REFERENCES practicum2425.employee(id);


--
-- Name: employee_shift employee_shift_shift_id_fkey; Type: FK CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.employee_shift
    ADD CONSTRAINT employee_shift_shift_id_fkey FOREIGN KEY (shift_id) REFERENCES practicum2425.shift(id);


--
-- Name: project_shift project_shift_project_id_fkey; Type: FK CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.project_shift
    ADD CONSTRAINT project_shift_project_id_fkey FOREIGN KEY (project_id) REFERENCES practicum2425.project(id);


--
-- Name: project_shift project_shift_shift_id_fkey; Type: FK CONSTRAINT; Schema: practicum2425; Owner: brycecoon_25
--

ALTER TABLE ONLY practicum2425.project_shift
    ADD CONSTRAINT project_shift_shift_id_fkey FOREIGN KEY (shift_id) REFERENCES practicum2425.shift(id);


--
-- PostgreSQL database dump complete
--

