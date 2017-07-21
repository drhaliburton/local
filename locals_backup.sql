--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.7
-- Dumped by pg_dump version 9.5.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: card_categories; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE card_categories (
    id integer NOT NULL,
    category_id integer,
    card_id integer
);


ALTER TABLE card_categories OWNER TO labber;

--
-- Name: card_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE card_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE card_categories_id_seq OWNER TO labber;

--
-- Name: card_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE card_categories_id_seq OWNED BY card_categories.id;


--
-- Name: cards; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE cards (
    id integer NOT NULL,
    "timestamp" timestamp with time zone,
    title character varying(255),
    location point,
    description character varying(255),
    duration integer,
    category_id integer,
    user_id integer
);


ALTER TABLE cards OWNER TO labber;

--
-- Name: cards_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE cards_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE cards_id_seq OWNER TO labber;

--
-- Name: cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE cards_id_seq OWNED BY cards.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE categories (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE categories OWNER TO labber;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE categories_id_seq OWNER TO labber;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE categories_id_seq OWNED BY categories.id;


--
-- Name: favorites; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE favorites (
    id integer NOT NULL,
    "timestamp" timestamp with time zone,
    card_id integer,
    user_id integer
);


ALTER TABLE favorites OWNER TO labber;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE favorites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE favorites_id_seq OWNER TO labber;

--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE favorites_id_seq OWNED BY favorites.id;


--
-- Name: itineraries; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE itineraries (
    id integer NOT NULL,
    "timestamp" timestamp with time zone,
    title character varying(255),
    itinerary_day character varying(255),
    date date,
    user_id integer
);


ALTER TABLE itineraries OWNER TO labber;

--
-- Name: itineraries_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE itineraries_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE itineraries_id_seq OWNER TO labber;

--
-- Name: itineraries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE itineraries_id_seq OWNED BY itineraries.id;


--
-- Name: itinerary_cards; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE itinerary_cards (
    id integer NOT NULL,
    "timestamp" timestamp with time zone,
    start_time time without time zone,
    itinerary_id integer,
    favorite_id integer
);


ALTER TABLE itinerary_cards OWNER TO labber;

--
-- Name: itinerary_cards_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE itinerary_cards_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE itinerary_cards_id_seq OWNER TO labber;

--
-- Name: itinerary_cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE itinerary_cards_id_seq OWNED BY itinerary_cards.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE migrations OWNER TO labber;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE migrations_id_seq OWNER TO labber;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE migrations_id_seq OWNED BY migrations.id;


--
-- Name: migrations_lock; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE migrations_lock (
    is_locked integer
);


ALTER TABLE migrations_lock OWNER TO labber;

--
-- Name: photos; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE photos (
    id integer NOT NULL,
    "timestamp" timestamp with time zone,
    url character varying(255),
    card_id integer
);


ALTER TABLE photos OWNER TO labber;

--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE photos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE photos_id_seq OWNER TO labber;

--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE photos_id_seq OWNED BY photos.id;


--
-- Name: ratings; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE ratings (
    id integer NOT NULL,
    "timestamp" timestamp with time zone,
    rating integer,
    card_id integer,
    user_id integer
);


ALTER TABLE ratings OWNER TO labber;

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE ratings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ratings_id_seq OWNER TO labber;

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE ratings_id_seq OWNED BY ratings.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: labber
--

CREATE TABLE users (
    id integer NOT NULL,
    "timestamp" timestamp with time zone,
    given_name character varying(255),
    family_name character varying(255),
    token character varying(255) DEFAULT '0'::character varying NOT NULL
);


ALTER TABLE users OWNER TO labber;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: labber
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO labber;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: labber
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY card_categories ALTER COLUMN id SET DEFAULT nextval('card_categories_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY cards ALTER COLUMN id SET DEFAULT nextval('cards_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY categories ALTER COLUMN id SET DEFAULT nextval('categories_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY favorites ALTER COLUMN id SET DEFAULT nextval('favorites_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY itineraries ALTER COLUMN id SET DEFAULT nextval('itineraries_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY itinerary_cards ALTER COLUMN id SET DEFAULT nextval('itinerary_cards_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY migrations ALTER COLUMN id SET DEFAULT nextval('migrations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY ratings ALTER COLUMN id SET DEFAULT nextval('ratings_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: labber
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: card_categories; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY card_categories (id, category_id, card_id) FROM stdin;
\.


--
-- Name: card_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('card_categories_id_seq', 1, false);


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY cards (id, "timestamp", title, location, description, duration, category_id, user_id) FROM stdin;
1	\N	Long Lake Provincial Park	(44.6214303000000001,-63.6272090000000006)	Long Lake is a provincial park controlled by the Department of Natural Resources (DNR) of the Government of Nova Scotia.	180	1	4
2	\N	Duncans Cove	(44.4998677000000029,-63.5526801999999975)	A small rural community on the Chebucto Peninsula in the Halifax Regional Municipality on the shore of the Atlantic Ocean on the Ketch Harbour Road.	180	1	4
3	\N	Johns Lunch	(44.6505439999999965,-63.5491026999999988)	it has legendary, no-frills landmark near the wharf known for straight-up fish ’n’ chips	120	2	4
4	\N	Cow Bay	(44.6251992999999985,-63.450582500000003)	Cow Bay is a community within Halifax Regional Municipality Nova Scotia on the Eastern Shore on Route 322 along the Marine Drive scenic route.	120	1	4
5	\N	Oak Island	(44.5137050000000016,-64.3017418000000021)	The tree-covered island is one of about 360 small islands in Mahone Bay and rises to a maximum of 11 meters above sea level	240	1	4
6	\N	Ballantyne	(45.8449556999999999,-61.9474313999999993)	this community in Antigonish County, Nova Scotia, Canada, lies on a small cove of the same name at the north-western end of St. George Bay	480	4	4
7	\N	Halifax Seaport Farmers Market	(44.6408885000000026,-63.5683414000000013)	The Halifax Farmers Market is the oldest continuously operating farmers market in North America having been founded in 1750.	60	2	4
8	\N	Stillwell Beer Garden	(44.6422777000000011,-63.5815867000000026)	Located on Barrington Street in downtown Halifax, Stillwell is the place to go for great craft beers from Nova Scotia’s flourishing craft brewing community and beyond	100	1	4
9	\N	Kiwi Cafe	(44.542950900000001,-64.2403276000000005)	This cafe has delicious, homemade baked treats, wonderful soups and lunches, and a famous all-day breakfast.	90	2	4
10	\N	The Manx Pub	(45.418888299999999,-75.6932699999999983)	Art-lined subterranean watering hole with a globally inspired pub-grub menu & occasional live music.	100	2	3
11	\N	ORESTA Organic Skin Care Confectionery	(45.4080736000000016,-75.6880368000000061)	A organic skin care store offering spa services in Ottawa	120	3	3
12	\N	National Gallery of Canada	(45.4295350000000013,-75.7010949000000011)	The National Gallery of Canada, located in the capital city of Ottawa, Ontario, is one of Canadas premier art galleries.	180	4	3
13	\N	El Camino	(45.4144371000000007,-75.6955925999999977)	Contemporary Mexican plates pair with assorted tequilas at this hip spot with a take-out window.	90	2	3
14	\N	Fauna	(45.4125348999999972,-75.6959099000000037)	Rustic, stylish eatery serving elevated, locally-sourced New Canadian small plates.	90	2	3
15	\N	Gateway of india	(18.9219840999999995,72.8324656000000061)	Grand, Indo-Saracenic-style, 26m-tall triumphal stone arch, built on the waterfront in 1924	80	4	1
16	\N	Hauz Khas	(28.5501207000000008,77.1882317000000029)	Hauz Khas is an affluent neighbourhood in South Delhi, its heart being the historic Hauz Khas Complex	150	4	1
\.


--
-- Name: cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('cards_id_seq', 16, true);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY categories (id, name) FROM stdin;
1	Nature
2	Food
3	Shopping
4	Sights
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('categories_id_seq', 4, true);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY favorites (id, "timestamp", card_id, user_id) FROM stdin;
1	\N	1	1
2	\N	2	1
3	\N	3	1
4	\N	4	1
\.


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('favorites_id_seq', 4, true);


--
-- Data for Name: itineraries; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY itineraries (id, "timestamp", title, itinerary_day, date, user_id) FROM stdin;
\.


--
-- Name: itineraries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('itineraries_id_seq', 1, false);


--
-- Data for Name: itinerary_cards; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY itinerary_cards (id, "timestamp", start_time, itinerary_id, favorite_id) FROM stdin;
\.


--
-- Name: itinerary_cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('itinerary_cards_id_seq', 1, false);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY migrations (id, name, batch, migration_time) FROM stdin;
1	20170717215018_create_all_tables.js	1	2017-07-20 22:22:23.148+00
2	20170719221846_add_access_token_to_users.js	1	2017-07-20 22:22:23.167+00
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('migrations_id_seq', 2, true);


--
-- Data for Name: migrations_lock; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY migrations_lock (is_locked) FROM stdin;
0
\.


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY photos (id, "timestamp", url, card_id) FROM stdin;
\.


--
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('photos_id_seq', 1, false);


--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY ratings (id, "timestamp", rating, card_id, user_id) FROM stdin;
\.


--
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('ratings_id_seq', 1, false);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: labber
--

COPY users (id, "timestamp", given_name, family_name, token) FROM stdin;
1	\N	Aisha	R	0
2	\N	Holden	W	0
3	\N	Rebecca	H	0
4	\N	Shauna	G	0
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: labber
--

SELECT pg_catalog.setval('users_id_seq', 4, true);


--
-- Name: card_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY card_categories
    ADD CONSTRAINT card_categories_pkey PRIMARY KEY (id);


--
-- Name: cards_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);


--
-- Name: categories_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: itineraries_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY itineraries
    ADD CONSTRAINT itineraries_pkey PRIMARY KEY (id);


--
-- Name: itinerary_cards_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY itinerary_cards
    ADD CONSTRAINT itinerary_cards_pkey PRIMARY KEY (id);


--
-- Name: migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: photos_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: card_categories_card_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY card_categories
    ADD CONSTRAINT card_categories_card_id_foreign FOREIGN KEY (card_id) REFERENCES cards(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: card_categories_category_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY card_categories
    ADD CONSTRAINT card_categories_category_id_foreign FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cards_category_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY cards
    ADD CONSTRAINT cards_category_id_foreign FOREIGN KEY (category_id) REFERENCES categories(id);


--
-- Name: cards_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY cards
    ADD CONSTRAINT cards_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: favorites_card_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY favorites
    ADD CONSTRAINT favorites_card_id_foreign FOREIGN KEY (card_id) REFERENCES cards(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: favorites_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY favorites
    ADD CONSTRAINT favorites_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: itineraries_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY itineraries
    ADD CONSTRAINT itineraries_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: itinerary_cards_favorite_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY itinerary_cards
    ADD CONSTRAINT itinerary_cards_favorite_id_foreign FOREIGN KEY (favorite_id) REFERENCES favorites(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: itinerary_cards_itinerary_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY itinerary_cards
    ADD CONSTRAINT itinerary_cards_itinerary_id_foreign FOREIGN KEY (itinerary_id) REFERENCES itineraries(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: photos_card_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_card_id_foreign FOREIGN KEY (card_id) REFERENCES cards(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ratings_card_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY ratings
    ADD CONSTRAINT ratings_card_id_foreign FOREIGN KEY (card_id) REFERENCES cards(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ratings_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: labber
--

ALTER TABLE ONLY ratings
    ADD CONSTRAINT ratings_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

