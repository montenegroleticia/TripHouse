--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: destinations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.destinations (
    id integer NOT NULL,
    city character varying(100),
    description character varying(500),
    image character varying(200)
);


--
-- Name: destinations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.destinations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: destinations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.destinations_id_seq OWNED BY public.destinations.id;


--
-- Name: lodges; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lodges (
    id integer NOT NULL,
    cityid integer NOT NULL,
    name character varying(100),
    address character varying(200),
    site character varying(200),
    image character varying(200),
    price numeric(10,2)
);


--
-- Name: lodges_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lodges_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lodges_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lodges_id_seq OWNED BY public.lodges.id;


--
-- Name: tickets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tickets (
    id integer NOT NULL,
    destination integer NOT NULL,
    origin text NOT NULL,
    airline text NOT NULL,
    departure timestamp without time zone NOT NULL,
    landing timestamp without time zone NOT NULL,
    price numeric(10,2) NOT NULL,
    image text NOT NULL
);


--
-- Name: tickets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tickets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tickets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tickets_id_seq OWNED BY public.tickets.id;


--
-- Name: destinations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.destinations ALTER COLUMN id SET DEFAULT nextval('public.destinations_id_seq'::regclass);


--
-- Name: lodges id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lodges ALTER COLUMN id SET DEFAULT nextval('public.lodges_id_seq'::regclass);


--
-- Name: tickets id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tickets ALTER COLUMN id SET DEFAULT nextval('public.tickets_id_seq'::regclass);


--
-- Data for Name: destinations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.destinations VALUES (1, 'Rio de Janeiro', 'Conhecida como a "Cidade Maravilhosa", o Rio de Janeiro é famoso por suas praias deslumbrantes, o icônico Cristo Redentor e o animado Carnaval.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/1200px-Cidade_Maravilhosa.jpg');
INSERT INTO public.destinations VALUES (2, 'São Paulo', 'A maior cidade do Brasil, São Paulo é um centro cosmopolita repleto de opções culturais, gastronômicas e de entretenimento.', 'https://www.melhoresdestinos.com.br/wp-content/uploads/2016/08/o-que-fazer-em-sao-paulo-capa2019-01-820x430.jpg');
INSERT INTO public.destinations VALUES (3, 'Salvador', 'Com sua rica herança africana, Salvador é um destino culturalmente vibrante, conhecido por suas festas de rua, música e arquitetura histórica.', 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/01/Encante-se-com-alguns-dos-lugares-mais-bonitos-em-Salvador.png');
INSERT INTO public.destinations VALUES (4, 'Foz do Iguaçu', 'Localizada na fronteira entre o Brasil, Argentina e Paraguai, Foz do Iguaçu abriga as impressionantes Cataratas do Iguaçu, consideradas uma das sete maravilhas naturais do mundo.', 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/passagens-aereas-foz-do-iguacu-capa2019-05.jpg');
INSERT INTO public.destinations VALUES (5, 'Florianópolis', 'Com suas belas praias, Florianópolis é um paraíso para os amantes do surf e da natureza. A ilha também possui uma vida noturna agitada e uma cultura local diversificada.', 'https://f1ciaimobiliaria.com.br/wp-content/uploads/2022/06/beira-mar-norte-florianopolis.jpg');


--
-- Data for Name: lodges; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.lodges VALUES (1, 1, 'Copacabana Palace', 'Avenida Atlântica, 1702 - Copacabana', 'https://www.copacabanapalace.com.br/', 'https://fortedecopacabana.com.br/wp-content/uploads/2022/09/copacabana-palace-preco.png', 250.00);
INSERT INTO public.lodges VALUES (2, 1, 'Hotel Fasano Rio de Janeiro', 'Avenida Vieira Souto, 80 - Ipanema', 'https://fasano.com.br/rio-de-janeiro', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSek1k_67NbwWiophXLaY9dOjr2nu3jsZFYqw&usqp=CAU', 200.50);
INSERT INTO public.lodges VALUES (3, 1, 'Grand Hyatt Rio de Janeiro', 'Avenida Lúcio Costa, 9600 - Barra da Tijuca', 'https://www.hyatt.com/en-US/hotel/brazil/grand-hyatt-rio-de-janeiro/riogh', 'https://media-cdn.tripadvisor.com/media/photo-s/24/ff/ef/47/exterior.jpg', 180.00);
INSERT INTO public.lodges VALUES (4, 1, 'Hilton Rio de Janeiro Copacabana', 'Avenida Atlântica, 1020 - Copacabana', 'https://www.hilton.com/en/hotels/gigokdi-hilton-rio-de-janeiro-copacabana/', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/39/a2/fc/exterior.jpg?w=700&h=-1&s=1', 150.00);
INSERT INTO public.lodges VALUES (5, 1, 'Sheraton Grand Rio Hotel & Resort', 'Avenida Niemeyer, 121 - Leblon', 'https://www.marriott.com/hotels/travel/riosh-sheraton-grand-rio-hotel-and-resort/', 'https://invexo.com.br/blog/wp-content/uploads/2021/01/sheraton-leblon.jpg', 170.50);
INSERT INTO public.lodges VALUES (6, 2, 'Hotel Unique', 'Avenida Brigadeiro Luís Antônio, 4700 - Jardim Paulista', 'https://www.hotelunique.com.br/', 'https://www.imosp.com.br/wp-content/uploads/2020/04/hotel-unique-3.jpg', 300.00);
INSERT INTO public.lodges VALUES (7, 2, 'Tivoli Mofarrej São Paulo', 'Alameda Santos, 1437 - Cerqueira César', 'https://www.tivolihotels.com/en/tivoli-mofarrej-sao-paulo', 'https://blogmaladeviagem.com.br/wp-content/uploads/2020/12/Blog-Mala-de-Viagem-tivoli-mofarrej.jpg', 150.50);
INSERT INTO public.lodges VALUES (8, 2, 'Grand Hyatt São Paulo', 'Avenida das Nações Unidas, 13301 - Itaim Bibi', 'https://www.hyatt.com/en-US/hotel/brazil/grand-hyatt-sao-paulo/saogh', 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/01/10/1158/Grand-Hyatt-Sao-Paulo-P862-Exterior.jpg/Grand-Hyatt-Sao-Paulo-P862-Exterior.16x9.jpg?imwidth=1280', 200.50);
INSERT INTO public.lodges VALUES (9, 2, 'Renaissance São Paulo Hotel', 'Alameda Santos, 2233 - Jardim Paulista', 'https://www.marriott.com/hotels/travel/saobr-renaissance-sao-paulo-hotel/', 'https://www.brasilfashionnews.com.br/wp-content/uploads/2021/04/8b.jpeg', 180.00);
INSERT INTO public.lodges VALUES (10, 2, 'Hotel Emiliano', 'Rua Oscar Freire, 384 - Jardim Paulista', 'https://www.emiliano.com.br/', 'https://www.riobook.com.br/site/thumbnail/image/537x339/files/fc90579f82283111eba2c242010a800003/f2def32d646f111eb85ed42010a800003/hemiliano1.jpg/', 250.00);


--
-- Data for Name: tickets; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tickets VALUES (1, 1, 'São Paulo', 'LATAM Airlines', '2023-05-26 09:00:00', '2023-05-26 11:30:00', 250.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wDJ6edZKZHuZjAovaTqaVbdsYj2AwUJXOA&usqp=CAU');
INSERT INTO public.tickets VALUES (2, 1, 'Brasília', 'GOL Linhas Aéreas', '2023-05-26 12:45:00', '2023-05-26 15:15:00', 180.50, 'https://aviacaobrasil.com.br/wp-content/uploads/2022/03/Gol-PS-GPN-e1651490669123.jpg');
INSERT INTO public.tickets VALUES (3, 1, 'Belo Horizonte', 'Azul Linhas Aéreas', '2023-05-26 14:30:00', '2023-05-26 16:00:00', 210.75, 'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/343645/8ad1ad8f9feacaeb559be9c3095320a9a330/full/full,1/0/default.jpg');
INSERT INTO public.tickets VALUES (4, 2, 'Rio de Janeiro', 'LATAM Airlines', '2023-05-26 10:30:00', '2023-05-26 12:00:00', 300.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wDJ6edZKZHuZjAovaTqaVbdsYj2AwUJXOA&usqp=CAU');
INSERT INTO public.tickets VALUES (5, 2, 'Brasília', 'GOL Linhas Aéreas', '2023-05-26 13:15:00', '2023-05-26 15:00:00', 250.50, 'https://aviacaobrasil.com.br/wp-content/uploads/2022/03/Gol-PS-GPN-e1651490669123.jpg');
INSERT INTO public.tickets VALUES (6, 2, 'Belo Horizonte', 'Azul Linhas Aéreas', '2023-05-26 16:45:00', '2023-05-26 18:30:00', 280.75, 'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/343645/8ad1ad8f9feacaeb559be9c3095320a9a330/full/full,1/0/default.jpg');
INSERT INTO public.tickets VALUES (7, 3, 'Rio de Janeiro', 'GOL Linhas Aéreas', '2023-05-26 09:30:00', '2023-05-26 11:15:00', 350.00, 'https://aviacaobrasil.com.br/wp-content/uploads/2022/03/Gol-PS-GPN-e1651490669123.jpg');
INSERT INTO public.tickets VALUES (8, 3, 'São Paulo', 'LATAM Airlines', '2023-05-26 12:45:00', '2023-05-26 14:30:00', 320.50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wDJ6edZKZHuZjAovaTqaVbdsYj2AwUJXOA&usqp=CAU');
INSERT INTO public.tickets VALUES (9, 3, 'Recife', 'Azul Linhas Aéreas', '2023-05-26 15:00:00', '2023-05-26 16:45:00', 290.75, 'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/343645/8ad1ad8f9feacaeb559be9c3095320a9a330/full/full,1/0/default.jpg');
INSERT INTO public.tickets VALUES (10, 4, 'São Paulo', 'LATAM Airlines', '2023-05-26 10:00:00', '2023-05-26 11:30:00', 280.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wDJ6edZKZHuZjAovaTqaVbdsYj2AwUJXOA&usqp=CAU');
INSERT INTO public.tickets VALUES (11, 4, 'Curitiba', 'GOL Linhas Aéreas', '2023-05-26 12:45:00', '2023-05-26 14:15:00', 220.50, 'https://aviacaobrasil.com.br/wp-content/uploads/2022/03/Gol-PS-GPN-e1651490669123.jpg');
INSERT INTO public.tickets VALUES (12, 4, 'Porto Alegre', 'Azul Linhas Aéreas', '2023-05-26 15:30:00', '2023-05-26 17:00:00', 310.75, 'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/343645/8ad1ad8f9feacaeb559be9c3095320a9a330/full/full,1/0/default.jpg');
INSERT INTO public.tickets VALUES (13, 5, 'São Paulo', 'LATAM Airlines', '2023-05-26 08:30:00', '2023-05-26 10:15:00', 180.50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wDJ6edZKZHuZjAovaTqaVbdsYj2AwUJXOA&usqp=CAU');
INSERT INTO public.tickets VALUES (14, 5, 'Rio de Janeiro', 'GOL Linhas Aéreas', '2023-05-26 11:00:00', '2023-05-26 12:45:00', 220.00, 'https://aviacaobrasil.com.br/wp-content/uploads/2022/03/Gol-PS-GPN-e1651490669123.jpg');
INSERT INTO public.tickets VALUES (15, 5, 'Curitiba', 'Azul Linhas Aéreas', '2023-05-26 13:30:00', '2023-05-26 15:15:00', 150.75, 'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/343645/8ad1ad8f9feacaeb559be9c3095320a9a330/full/full,1/0/default.jpg');


--
-- Name: destinations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.destinations_id_seq', 5, true);


--
-- Name: lodges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.lodges_id_seq', 10, true);


--
-- Name: tickets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tickets_id_seq', 15, true);


--
-- Name: destinations destinations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.destinations
    ADD CONSTRAINT destinations_pkey PRIMARY KEY (id);


--
-- Name: lodges lodges_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lodges
    ADD CONSTRAINT lodges_pkey PRIMARY KEY (id);


--
-- Name: tickets tickets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id);


--
-- Name: lodges lodges_cityid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lodges
    ADD CONSTRAINT lodges_cityid_fkey FOREIGN KEY (cityid) REFERENCES public.destinations(id);


--
-- Name: tickets tickets_destination_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_destination_fkey FOREIGN KEY (destination) REFERENCES public.destinations(id);


--
-- PostgreSQL database dump complete
--

