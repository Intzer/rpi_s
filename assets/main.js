$(document).ready(function() {
	const szWriterUrlParam = "writer";
	const iWriterCount = 5;
	let WritersArray = Array(new Map(), new Map(), new Map(), new Map(), new Map(), new Map(), new Map(), new Map(), new Map(), new Map());

	// Змятрок Бядуля
	// 0, 1 - for first
	// 2, 3 - for second
	// 4, 5 - for third and etc...
	WritersArray[0].set('wname', 'Змитрок Бядуля');
	WritersArray[0].set('wphoto', "zb.jpg");
	WritersArray[0].set('wborndie', '23 апреля 1886 года - 3 ноября 1941 года<br>Белорусский и советский писатель и поэт, лексикограф.');
	WritersArray[0].set("wimages1", "zbi1.jpg");
	WritersArray[0].set("wimages2", "zbi2.jpg");
	WritersArray[0].set("wimages3", "zbi3.jpg");
	WritersArray[0].set("wvideo", "https://www.youtube.com/embed/GB_rlueYscM");
	WritersArray[0].set("wmap", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d594989.3172731576!2d27.257464400429207!3d54.37152246575233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dba55eab2b6b3d%3A0x41c1a0cfde6692ee!2z0JvQvtCz0L7QudGB0LrQuNC5INGA0LDQudC-0L0!5e0!3m2!1sru!2sby!4v1671200633297!5m2!1sru!2sby");
	WritersArray[0].set("wbborndate", "23 апреля 1886 год");
	WritersArray[0].set("wbborn", "Самуил (Шмуэл-Нохим) Плавник, впоследствии известный под литературным псевдонимом Змитрок Бядуля, родился в небогатой еврейской семье (д. Посадец, Виленская губерния, Российская империя, ныне Логойский район Минской области). Учился в хедере. Владел идишем, древнееврейским, белорусским, русским и немецким.");
	WritersArray[0].set("wbeducationdate", "до 1902 года");
	WritersArray[0].set("wbeducation", "В семь лет Самуил пошёл в начальную еврейскую школу (хедер). После её окончания поступил в Долгиновскую школу раввинов (иешиву), затем перешёл в Ильянскую иешиву, но не окончил ни одну из них из-за своего вольнодумства и конфликтов с администрацией (позже описанных, в частности, в повести «В дремучих лесах») и вернулся домой. Работал домашним учителем, а с 1902 года — конторщиком на лесозаготовках");
	WritersArray[0].set("wbartdate", "1885 - 1900 года`");
	WritersArray[0].set("wbart", "Поначалу Бядуля ориентировался на старинную еврейскую литературу (на религиозные произведения тех времён). Но позже отказался от этой манеры письма и начал изучать современную литературу. Тогда он и начал писать стихи и рассказы на русском языке, подражая манере знаменитых поэтов XIX века. Но белорусские язык и культура всё равно врывались в его произведения. В 1909 году в руки Змитрока попала белорусскоязычная газета «Наша Ніва» благодаря одному из соседей (постоянному корреспонденту газеты Вульфу Сосенскому, который и рекомендовал редакции нового автора). Сам факт существования «простонародного» издания впечатлил молодого человека, и газета очень повлияла на его мировоззрение. В середине 1910 года З. Бядуля отдал в редакцию «Нашай Нівы» свои стихи, но они не были опубликованы, возможно, потому, что были ещё незрелыми. Однако в том же году в газете появилось его первое опубликованное произведение — импрессия «Пяюць начлежнікі». Для ранних произведений Бядули, как для стихов, так и для прозы, был характерен романтизм. Чтобы передать мировоззрение и богатство духовной и культурной жизни человека вообще и крестьян в особенности, Бядуля стремился подражать Я. Купале и Я. Коласу. В середине 1910-х годов поэт начал подписываться своим литературным псевдонимом. Романтизм Бядули был виден даже в описаниях природы и быта, превозносились и люди. Но со временем писатель всё же выбрал реализм и увлёкся психологически-бытовыми зарисовками. Он стремился показать жизнь как можно более реальной. В своих произведениях писатель стремился показать тяжелую долю рабочих («Ля вапеннай гары»), рассказывал о горе людей, пострадавших от пожара («Чырвоная казка»), показал трагедию крестьянина в столкновении с жестокостью жизни («Без споведзі»). Показал сложность крестьянской жизни, чему помогала близость литератора к селянам и понимание души крестьянства. В 1911—1912 стихи Бядули на русском языке печатались в журналах «На берегах Невы» (Санкт-Петербург) и «Молодые порывы» (Вильно). В 1913 он опубликовал сборник лирических импрессий на белорусском языке «Абразкі» (Петербург), с тех пор писал почти исключительно по-белорусски.");
	WritersArray[0].set("wbdiedate", "3 ноября 1941 года");
	WritersArray[0].set("wbdie", "После вторжения Германии в СССР в 1941 году писатель был вынужден покинуть Белоруссию. В эвакуации жил сначала в Пижме Горьковской области, затем, до конца октября 1941 года, в посёлке Новые Бурасы Саратовской области. Скончался около Уральска в Казахстане, где и был похоронен.");

	// It is enough to translate
	WritersArray[1].set('wname', 'Zmitrok Byadulya');
	WritersArray[1].set('wborndie', 'April 23, 1886 - November 3, 1941<br>Belarusian and Soviet writer and poet, lexicographer.');
	WritersArray[1].set("wbborndate", "April 23, 1886");
	WritersArray[1].set("wbborn", "Samuel (Shmuel-Nohum) Plavnik, later known under the literary pseudonym Zmitrok Byadulya, was born into a poor Jewish family (Posadets village, Vilna province, Russian Empire, now Logoysky district of Minsk region). He studied at Hedera. He spoke Yiddish, Hebrew, Belarusian, Russian and German.");
	WritersArray[1].set("wbeducationdate", "before 1902");
	WritersArray[1].set("wbeducation", "At the age of seven, Samuel went to an elementary Jewish school (heder). After graduation, he entered the Dolgin School of Rabbis (yeshiva), then moved to the Ilyan yeshiva, but did not graduate from any of them because of his free-thinking and conflicts with the administration (later described, in particular, in the story In the Dense Forests) and returned home. He worked as a home teacher, and since 1902 as a clerk in logging");
	WritersArray[1].set("wbartdate", "1885 - 1900");
	WritersArray[1].set("wbart", "At first, Byadulya focused on ancient Jewish literature (religious works of those times). But later he abandoned this style of writing and began to study modern literature. Then he began to write poems and short stories in Russian, imitating the manner of famous poets of the XIX century. But the Belarusian language and culture still broke into his works. In 1909, the Belarusian-language newspaper Nasha Niva got into the hands of Zmitrok thanks to one of the neighbors (a regular correspondent of the newspaper, Wolf Sosensky, who recommended the new author to the editorial office). The very fact of the existence of a vernacular publication impressed the young man, and the newspaper greatly influenced his worldview. In the middle of 1910 , Z. Byadulya gave his poems to the editorial office of Nashai Niva, but they were not published, perhaps because they were still immature. However, in the same year his first published work appeared in the newspaper — the impression Pyayut nachlezhniki. For Byaduli's early works, both for poetry and prose, romanticism was characteristic. In order to convey the worldview and richness of the spiritual and cultural life of man in general and peasants in particular, Byadulya sought to imitate Ya. Kupala and Ya. Kolas. In the mid-1910s, the poet began to sign his literary pseudonym. Byaduli's romanticism was visible even in descriptions of nature and everyday life, and people were praised. But over time, the writer still chose realism and became interested in psychological and everyday sketches. He tried to show life as real as possible. In his works, the writer sought to show the heavy share of workers (La vapennai gary), told about the grief of people affected by the fire (Chyrvonaya Kazka), showed the tragedy of a peasant in a collision with the cruelty of life (Without spovedzi). He showed the complexity of peasant life, which was helped by the proximity of the writer to the villagers and an understanding of the soul of the peasantry. In 1911-1912, Byaduli's poems in Russian were published in the magazines On the Banks of the Neva (St. Petersburg) and Young Impulses (Vilna). In 1913, he published a collection of lyrical impressions in the Belarusian language Abraski (St. Petersburg), since then he has written almost exclusively in Belarusian.");
	WritersArray[1].set("wbdiedate", "November 3, 1941");
	WritersArray[1].set("wbdie", "After the German invasion of the USSR in 1941, the writer was forced to leave Belarus. During the evacuation, he lived first in Tansy, Gorky region, then, until the end of October 1941, in the village of Novye Burasy, Saratov region. He died near Uralsk in Kazakhstan, where he was buried.");

	// Якуб Колас
	WritersArray[2].set('wname', 'Якуб Колос');
	WritersArray[2].set('wphoto', "yk.jpg");
	WritersArray[2].set('wborndie', '3 ноября 1882 года - 13 августа 1956 года<br>Белорусский советский писатель, драматург, поэт и переводчик, общественный деятель. Один из классиков и основоположников новой белорусской литературы. Народный поэт Белорусской ССР. Академик АН Белорусской ССР. Член СП СССР. Заслуженный деятель науки Белорусской ССР.');
	WritersArray[2].set("wimages1", "yki1.jpg");
	WritersArray[2].set("wimages2", "yki2.jpg");
	WritersArray[2].set("wimages3", "yki3.jpg");
	WritersArray[2].set("wvideo", "https://www.youtube.com/embed/9kvHZLJdW3Q");
	WritersArray[2].set("wmap", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5469.857897384276!2d27.601103648302853!3d53.918959763773245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf078cd1d071%3A0x84f87ff9985f335b!2z0JTQt9GP0YDQttCw0Z7QvdGLINC70ZbRgtCw0YDQsNGC0YPRgNC90LAt0LzQtdC80LDRgNGL0Y_Qu9GM0L3RiyDQvNGD0LfQtdC5INCv0LrRg9Cx0LAg0JrQvtC70LDRgdCw!5e0!3m2!1sru!2sby!4v1671208954429!5m2!1sru!2sby");
	WritersArray[2].set("wbborndate", "3 ноября 1882 года");
	WritersArray[2].set("wbborn", "Родился 22 октября (3 ноября) 1882 года в деревне Акинчицы (теперь территория города Столбцы Столбцовского района Минской области Белоруссии), в православной семье лесника Михаила Казимировича (Михася) Мицкевича и домохозяйки Анны Юрьевны Лесик. Предки по отцовской линии — католики.");
	WritersArray[2].set("wbeducationdate", "до 1915 года");
	WritersArray[2].set("wbeducation", "Окончил народную школу, в 1902 году — Несвижскую учительскую семинарию. Работал учителем на Пинщине (1902—1906). В 1906 году первая публикация — стихотворение «Край родимый» в белорусской газете «Наша доля». В 1907 году возглавлял литературный отдел белорусской газеты «Наша Нива» в Вильне[5]. За участие в организации нелегального учительского съезда 1906 года был приговорён к заключению, которое отбывал в минской тюрьме (1908—1911). В 1912—1914 годах учительствовал в Пинске. Здесь в 1914 году у него родился его старший сын Даниил, который впоследствии стал создателем и первым директором музея своего отца. В 1917 родился его средний сын — Юрий Константинович Мицкевич, а в 1926 младший сын — Михаил Константинович (Михась) Мицкевич.");
	WritersArray[2].set("wbartdate", "1906 — 1956 года");
	WritersArray[2].set("wbart", "До Октябрьской революции вышли сборники стихов «Песни неволи» (1908), «Песни печали» (1910), отдельные главы эпической поэмы «Новая зямля»[9], а также сборники прозы «Рассказы» (1912), «Родные образы» (1914). В двадцатых годах XX века были опубликованы поэмы «Новая земля» (1923), «Сымон-музыкант» (1925), повести «В полесской глуши» (1922), «В глубине Полесья» (1928), «На просторах жизни» (1926), отдельные лирические стихотворения, пьесы. В тридцатых годах написаны циклы стихов «Колхозное» (1930), «Осеннее» (1935), повесть «Отщепенец» (1930—1931). События революции и гражданской войны отражены в повести «Трясина» («Дрыгва», 1933).");
	WritersArray[2].set("wbdiedate", "13 августа 1956 года");
	WritersArray[2].set("wbdie", "В конце жизни часто болел, в частности, перенёс 26 воспалений лёгких. Скончался 13 августа 1956 года. Похоронен на Военном кладбище в Минске.");

	// It is enough to translate
	WritersArray[3].set('wname', 'Jakub Kolas');
	WritersArray[3].set('wborndie', 'November 3, 1882 - August 13, 1956<br>Belarusian Soviet writer, playwright, poet and translator, public figure. One of the classics and founders of the new Belarusian literature. Peoples Poet of the Belarusian SSR. Academician of the Academy of Sciences of the Belarusian SSR. Member of the Joint Venture of the USSR. Honored Scientist of the Belarusian SSR.');
	WritersArray[3].set("wbborndate", "November 3, 1882");
	WritersArray[3].set("wbborn", "Born on October 22 (November 3), 1882 in the village of Akinchitsy (now the territory of the city of Stolbtsy, Stolbtsovsky district, Minsk region of Belarus), in the Orthodox family of forester Mikhail Kazimirovich (Mikhail) Mickiewicz and housewife Anna Yurievna Lesik. My paternal ancestors are Catholics.");
	WritersArray[3].set("wbeducationdate", "before 1915");
	WritersArray[3].set("wbeducation", "He graduated from the national school, in 1902 — the Nesvizh Teachers' Seminary. He worked as a teacher in the Pinsk region (1902-1906). In 1906, the first publication was the poem The Native Land in the Belarusian newspaper Our Share. In 1907, he headed the literary department of the Belarusian newspaper Nasha Niva in Vilna[5]. For participating in the organization of an illegal teachers' congress in 1906, he was sentenced to imprisonment, which he served in a Minsk prison (1908-1911). In 1912-1914 he taught in Pinsk. Here, in 1914, his eldest son Daniel was born to him, who later became the creator and first director of his father's museum. In 1917, his middle son, Yuri Konstantinovich Mitskevich, was born, and in 1926 the youngest son, Mikhail Konstantinovich (Mikhas) Mickiewicz.");
	WritersArray[3].set("wbartdate", "1906 — 1956");
	WritersArray[3].set("wbart", "Before the October Revolution, collections of poems Songs of Bondage (1908), Songs of Sorrow (1910), separate chapters of the epic poem Novaya Zyamlya[9], as well as collections of prose Stories (1912), Native Images (1914) were published. In the twenties of the XX century, the poems Novaya Zemlya (1923), Simon the Musician (1925), the novellas In the Wilderness of Polesie (1922), In the Depths of Polesie (1928), In the Vastness of Life (1926), individual lyrical poems, plays were published. In the thirties, the cycles of poems Kolkhoz (1930), Autumn (1935), the story The Renegade (1930-1931) were written. The events of the revolution and the Civil War are reflected in the story Quagmire (Drygva, 1933).");
	WritersArray[3].set("wbdiedate", "August 13, 1956");
	WritersArray[3].set("wbdie", "At the end of his life, he was often ill, in particular, he suffered 26 pneumonia. He died on August 13, 1956. He was buried at the Military Cemetery in Minsk.");

	// Франциск Богушевич
	WritersArray[4].set('wname', 'Франциск Богушевич');
	WritersArray[4].set('wphoto', "zb.jpg");
	WritersArray[4].set('wborndie', '21 марта 1840 - 28 апреля 1900<br>Белорусский поэт, один из основоположников новой белорусской литературы. Основоположник критического реализма в белорусской литературе.');
	WritersArray[4].set("wimages1", "fbi1.jpg");
	WritersArray[4].set("wimages2", "fbi2.jpg");
	WritersArray[4].set("wimages3", "fbi3.jpg");
	WritersArray[4].set("wvideo", "https://www.youtube.com/embed/7F2ROTgI7Xo");
	WritersArray[4].set("wmap", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105129.47313246665!2d26.693500294071256!3d54.96787562022713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dce6535772a91d%3A0xfdcc8a15b5bbba56!2z0KHQstC40YDQsNC90Ys!5e0!3m2!1sru!2sby!4v1671209298129!5m2!1sru!2sby");
	WritersArray[4].set("wbborndate", "21 марта 1840 года");
	WritersArray[4].set("wbborn", "Родился в семье обедневшего дворянина Казимира Богушевича в фольварке Свираны Завилейского уезда Виленской губернии (теперь Свиронис Вильнюсского района Литвы).");
	WritersArray[4].set("wbeducationdate", "до 24 октября 1861");
	WritersArray[4].set("wbeducation", "Начальное образование получил в Виленской гимназии, которую закончил в 1861 году. В том же году поступил в Петербургский университет на физико-математический факультет. В знак протеста против новых университетских правил, которые ограничивали права учащихся, студенты, вернувшись с летних каникул, отказались принимать матрикулы. Борьба закончилась кровавой стычкой на университетском крыльце 24 октября. Вероятно, эти события подтолкнули Богушевича 14 ноября написать заявление на имя ректора с просьбой уволить его из университета из-за тяжелой болезни и неблагоприятного климата.");
	WritersArray[4].set("wbartdate", "1885 — 1900 года");
	WritersArray[4].set("wbart", "Богушевич писал и печатал свои произведения латиницей. Сейчас они издаются кириллицей, поэтому современный читатель не может оценить все особенностей богушевичского письма, способы передачи поэтом белорусской фонетики латиницей. Истоки творчества Ф. Богушевича — в общественной жизни Белоруссии, они тесно связаны с фольклором, а также с лучшими эстетическими традициями славянской поэзии. Богушевич — основоположник критического реализма в белорусской литературе. Он автор двух сборников стихотворений — «Dudka biаłaruskaja» и «Smyk biаłaruski», которые издал в Австро-Венгрии. Первыми известными поэтическими пробами Франциска Богушевича считают найденные во Львове стихотворения на польском языке: «Новый год 1886» («Nowy rok 1886»), «Призрак надежды» («Widmo nadziei»), «Кто это?» («Kto to?»), — написанные в 1885—1886 гг. В архиве Яна Карловича сохранился автограф басни Ф. Богушевича на белорусском языке «Волк, ягнёнок, овца» («Воўк, ягня, авечка», по содержанию, 1886).");
	WritersArray[4].set("wbdiedate", "28 апреля 1900 года");
	WritersArray[4].set("wbdie", "Возвратился на родину, работал учителем в селении Дота. Участвовал в Польском восстании 1863—1864 годов в отряде Людвика Нарбутта, был ранен. После разгрома восстания жил в Российской империи, учился в Нежинском юридическом лицее. Работал адвокатом, защитником прав крестьянства. После амнистии для всех участников восстания, приуроченной к восхождению на трон Александра III, переехал с семьёй в Вильно. Работал в адвокатской конторе, писал статьи в польскоязычный журнал «Край». После увольнения жил в Кушлянах (теперь Сморгонский район), где и умер. Похоронен в деревне Жупраны Ошмянского района.");

	// It is enough to translate
	WritersArray[5].set('wname', 'Francis Bogushevich');
	WritersArray[5].set('wborndie', 'March 21, 1840 - April 28, 1900<br>Belarusian poet, one of the founders of the new Belarusian literature. The founder of critical realism in Belarusian literature.');
	WritersArray[5].set("wbborndate", "March 21, 1840");
	WritersArray[5].set("wbborn", "Was born in the family of an impoverished nobleman Kazimir Bogushevich in the village of Svirana, Zavileysky district, Vilna province (now Svironis, Vilnius district of Lithuania).");
	WritersArray[5].set("wbeducationdate", "until October 24, 1861");
	WritersArray[5].set("wbeducation", "He received his primary education at the Vilna Gymnasium, from which he graduated in 1861. In the same year he entered the St. Petersburg University at the Faculty of Physics and Mathematics. In protest against the new university rules that restricted the rights of students, students, returning from summer holidays, refused to accept matricules. The struggle ended in a bloody skirmish on the university porch on October 24. Probably, these events prompted Bogushevich on November 14 to write an application addressed to the rector with a request to dismiss him from the university due to a serious illness and an unfavorable climate.");
	WritersArray[5].set("wbartdate", "1885 — 1900");
	WritersArray[5].set("wbart", "Bogushevich wrote and printed his works in Latin. Now they are published in Cyrillic, so the modern reader cannot appreciate all the features of the Bogushevichi letter, the ways the poet transmits Belarusian phonetics in Latin. The origins of F. Bogushevich's creativity are in the public life of Belarus, they are closely connected with folklore, as well as with the best aesthetic traditions of Slavic poetry. Bogushevich is the founder of critical realism in Belarusian literature. He is the author of two collections of poems — Dudka białaruskaja and Smyk białaruski, which he published in Austria-Hungary. The first known poetic samples of Francis Bogushevich are considered to be poems found in Lviv in Polish: New Year 1886 (Nowy rok 1886), Ghost of Hope (Widmo nadziei), Who is this? (Kto to?), — written in 1885-1886 . In the archive of Yan Karlovich, an autograph of F. Bogushevich's fable in the Belarusian language Wolf, lamb, sheep (Voyk, lamb, avechka, according to the content, 1886) has been preserved.");
	WritersArray[5].set("wbdiedate", "28 апреля 1900 года");
	WritersArray[5].set("wbdie", "He returned to his homeland, worked as a teacher in the village of Dota. Participated in the Polish uprising of 1863-1864 in the detachment of Ludwik Narbutt, was wounded. After the defeat of the uprising, he lived in the Russian Empire, studied at the Nezhinsky Law Lyceum. He worked as a lawyer, defender of the rights of the peasantry. After the amnesty for all participants of the uprising, timed to coincide with the ascension to the throne of Alexander III, he moved with his family to Vilna. He worked in a lawyer's office, wrote articles in the Polish-language magazine Edge. After his dismissal, he lived in Kushlyany (now Smorgon district), where he died. He was buried in the village of Zhuprany, Oshmyansky district.");

	// Пятрусь Броука
	WritersArray[6].set('wname', 'Петрусь Бровка');
	WritersArray[6].set('wphoto', "pb.jpg");
	WritersArray[6].set('wborndie', '25 июня 1905 года - 24 марта 1980 года<br>Белорусский советский писатель, поэт и переводчик, драматург, публицист. Народный поэт Белорусской ССР. Герой Социалистического Труда. Академик АН БССР. Лауреат Ленинской и двух Сталинских премий.');
	WritersArray[6].set("wimages1", "pbi1.jpg");
	WritersArray[6].set("wimages2", "pbi2.jpg");
	WritersArray[6].set("wimages3", "pbi3.jpg");
	WritersArray[6].set("wvideo", "https://www.youtube.com/embed/NabkTRPt7ck");
	WritersArray[6].set("wmap", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.823215544486!2d27.558677115734085!3d53.899346040846176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc17d85a9ad%3A0xc02659e9771bc5ec!2z0JvQuNGC0LXRgNCw0YLRg9GA0L3Ri9C5INC80YPQt9C10Lkg0J_QtdGC0YDRg9GB0Y8g0JHRgNC-0LLQutC4!5e0!3m2!1sru!2sby!4v1671209587281!5m2!1sru!2sby");
	WritersArray[6].set("wbborndate", "25 июня 1905 года");
	WritersArray[6].set("wbborn", "Родился 12 (25) июня 1905 года в деревне Путилковичи (ныне Ушачский район, Витебская область, Беларусь) в крестьянской семье (9 детей). Отец — Устин Адамович. Мать — Алёна Степановна");
	WritersArray[6].set("wbeducationdate", "до 1931 года");
	WritersArray[6].set("wbeducation", "Окончил церковно-приходскую школу в Лепеле и затем педагогический факультет БГУ");
	WritersArray[6].set("wbartdate", "1885 — 1900 года");
	WritersArray[6].set("wbart", "Литературной деятельностью занимался с 1926 года. Дебютировал в газете «Чырвоная Полаччына» и в литературном альманахе «Наддзвінне». Опубликовал ряд книг стихов и поэм: «К родным берегам», «Избранные стихи и поэмы» (1934), «Приход героя» (1935), «Весна родины» (1937), «Путями боровыми» (1940). Подвиг народа, его мужество и стойкость Бровка отразил в лиро-эпических поэмах «Беларусь» (1943), «Поэма про Смолячкова» (1942), стихах «Будем сеять, белорусы!», «Кастусь Калиновский», «Надя-Надейка», «Могила бойца». Поэмы «Ясный Кут», «Полонянка» (1945), «Хлеб» (1946), стихи «Парк Победы», «Смерть героя», «Кузнец» отмечены тонким лиризмом, ярким национальным колоритом. В 1957 году написал роман «Когда сливаются реки», посвящённый строительству ГЭС на границе трёх республик, дружбе белорусов, литовцев и латышей. Переводил на белорусский язык произведения Т. Шевченко, В. Маяковского, П. Тычины, Н. Бажана, А. Твардовского, М. Исаковского, А. Прокофьева, В. Броневского, Дж. Байрона.");
	WritersArray[6].set("wbdiedate", "24 марта 1980 года");
	WritersArray[6].set("wbdie", "П. У. Бровка умер 24 марта 1980 года в Минске. Похоронен на Восточном кладбище");

	// It is enough to translate
	WritersArray[7].set('wname', 'Petrus Brovkaf');
	WritersArray[7].set('wborndie', 'June 25, 1905 - March 24, 1980<br>Belarusian Soviet writer, poet and translator, playwright, publicist. Peoples Poet of the Belarusian SSR. Hero of Socialist Labor. Academician of the Academy of Sciences of the BSSR. Winner of the Lenin and two Stalin Prizes.');
	WritersArray[7].set("wbborndate", "June 25, 1905");
	WritersArray[7].set("wbborn", "Was born on June 12 (25), 1905 in the village of Putilkovichi (now Ushachsky district, Vitebsk region, Belarus) in a peasant family (9 children). The father is Ustin Adamovich. Mother — Alyona Stepanovna");
	WritersArray[7].set("wbeducationdate", "before 1931");
	WritersArray[7].set("wbeducation", "Graduated from the parish school in Lepel and then the pedagogical faculty of BSU");
	WritersArray[7].set("wbartdate", "1885 — 1900");
	WritersArray[7].set("wbart", "Engaged in literary activity since 1926. He made his debut in the newspaper Chyrvonaya Polachchyna and in the literary almanac Naddzvinne. He published a number of books of poems and poems: To the native shores, Selected poems and poems (1934), The Arrival of the Hero (1935), Spring of the Motherland (1937), The Ways of the Hog (1940). Brovka reflected the feat of the people, their courage and steadfastness in the lyric-epic poems Belarus (1943), Poem about Smolyachkov (1942), poems Lets sow, Belarusians!, Kastus Kalinovsky, Nadia-Nadeika, Grave of a fighter. The poems Clear Cut, Polonyanka (1945), Bread (1946), poems Victory Park, Death of a Hero, The Blacksmith are marked by subtle lyricism, bright national flavor. In 1957 he wrote the novel When rivers Merge, dedicated to the construction of hydroelectric power plants on the border of the three republics, the friendship of Belarusians, Lithuanians and Latvians. Translated into Belarusian the works of T. Shevchenko, V. Mayakovsky, P. Tychina, N. Bazhan, A. Tvardovsky, M. Isakovsky, A. Prokofiev, V. Bronevsky, J. Byron.");
	WritersArray[7].set("wbdiedate", "March 24, 1980");
	WritersArray[7].set("wbdie", "P. U. Brovka died on March 24, 1980 in Minsk. Buried in the Eastern Cemetery");

	// Максим Богданович
	WritersArray[8].set('wname', 'Максим Богданович');
	WritersArray[8].set('wphoto', "mb.jpg");
	WritersArray[8].set('wborndie', '9 декабря 1891 года - 25 мая 1917 года<br>Белорусский поэт, публицист, литературовед, переводчик; классик белорусской литературы, один из создателей белорусской литературы и современного литературного белорусского языка.');
	WritersArray[8].set("wimages1", "mbi1.jpg");
	WritersArray[8].set("wimages2", "mbi2.jpg");
	WritersArray[8].set("wimages3", "mbi3.jpg");
	WritersArray[8].set("wvideo", "https://www.youtube.com/embed/cFcuvXlvUnM");
	WritersArray[8].set("wmap", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.2021641489437!2d27.55478913290712!3d53.91038337637408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf94160016ff%3A0xfabeffbe2f0fbf00!2z0JzQsNC60YHQuNC8INCR0L7Qs9C00LDQvdC-0LLQuNGHLCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1671209766819!5m2!1sru!2sby");
	WritersArray[8].set("wbborndate", "9 декабря 1891 года");
	WritersArray[8].set("wbborn", "На момент свадьбы Адаму Богдановичу было 26, а Марии — 19 лет. Он вспоминал о супружестве как об одном из счастливейших периодов своей жизни. Учитель 1-ого городского училища Минска Адам Егорович Богданович (1862—1940) и его жена Мария Афанасьевна (1869—1896) были материально обеспечены: Адам зарабатывал до 1500 рублей в год при готовой квартире с отоплением и освещением, располагавшейся на Троицкой горе на улице Александровской в доме Коркозовича, что во дворе, во втором этаже; в то время в нём помещалось 1-е приходское училище и учительские квартиры, позднее это был дом 25 (ныне здесь участок улицы М. Богдановича напротив сквера возле Театра оперы и балета. Первенец Вадим родился 6 (18) марта 1890 года, Максим — 27 ноября (9 декабря) 1891 года в 9 часов вечера.");
	WritersArray[8].set("wbeducationdate", "до 1916 года");
	WritersArray[8].set("wbeducation", "В 1902 году Максим поступил в Нижегородскую мужскую гимназию. Во время Революции 1905 года принимает участие в ученических и студенческих демонстрациях, за что получает аттестацию «неблагонадёжного ученика». В 1906 году крестная мать Максима В. Сёмова выписывает для него газету «Наша доля», а потом и «Нашу ниву». В конце года Богданович присылает белорусские книги и газеты в Нижегородскую тюрьму революционеру белорусского происхождения Степану Зенченко. Окончив в 1911 году гимназию, он посещает Вильну, знакомится с Вацлавом Ластовским, Антоном и Иваном Луцкевичами и другими деятелями белорусского Возрождения. Будучи в Вильне, молодой поэт ознакомился в частном музее братьев Луцкевичей с коллекциями древних раритетов, и под их впечатлением написал стихотворение «Слуцкие ткачихи». В этом произведении автор рассказывает печальную историю крепостных ткачих, поэтизируя умельство мастериц ткать золотые пояса, куда они добавляют «вместо персидского узора цветок родимый василька». В том же году Максим Богданович намеревался поступить на Филологический факультет Петербургского университета, но из-за недостатка средств и сырого климата столицы, возвращается в Ярославль, поступив в Демидовский юридический лицей. По словам отца, «внутренняя сторона» жизни Максима Богдановича чуть ли не целиком поглощалась его учением как подготовкой к общественной и литературной работе, его писательством, его творчеством; на всё остальное и времени, и сил оставалось очень мало. Много времени уходило на изучение западно-европейских и славянских языков и литератур, особенно на изучение белорусского языка, истории, этнографии, литературы. Во время учёбы сотрудничает в ярославской газете «Голос»; много пишет, печатается в различных российских и белорусских изданиях, приобретает известность.");
	WritersArray[8].set("wbartdate", "1907 — 1917 года");
	WritersArray[8].set("wbart", "По мнению литературоведа И. И. Замотина (1873—1942), в творчестве Богдановича находили отражение литературные искания и предреволюционные настроения начала века, белорусское возрождение и старина, личные переживания; на многих его стихотворениях и повестях лежит общий грустный колорит, вызванный противоречивой эпохой, а также обусловленный болезнью поэта и предчувствием близкого конца; но Богданович верит в обновление жизни и ждёт его с надеждою. Максим Богданович создал много прекрасных образцов гражданской, пейзажной, философской лирики; написал ряд любовных стихов, посвящённых Анне Кокуевой (ярославская знакомая поэта, в которую он был влюблён). Лирика Богдановича тесно связана с устной народной поэзией, национально-освободительными идеями, проникнута любовью к трудовому народу. В некоторых стихах звучит протест против мира насилия и социальной несправедливости");
	WritersArray[8].set("wbdiedate", "25 мая 1917 года");
	WritersArray[8].set("wbdie", "В феврале 1917 года друзья поэта собрали деньги, чтобы он мог ехать в Крым лечиться от туберкулёза. Но лечение не помогло. Умер Максим Богданович на рассвете 13 (25) мая 1917 года в возрасте 25 лет (из горла пошла кровь).");

	// It is enough to translate
	WritersArray[9].set('wname', 'Maxim Bogdanovich');
	WritersArray[9].set('wborndie', 'December 9, 1891 - May 25, 1917<br>Belarusian poet, publicist, literary critic, translator; classic of Belarusian literature, one of the creators of Belarusian literature and modern literary Belarusian language.');
	WritersArray[9].set("wbborndate", "December 9, 1891");
	WritersArray[9].set("wbborn", "At the time of the wedding Adam Bogdanovich was 26, and Maria was 19 years old. He recalled marriage as one of the happiest periods of his life. The teacher of the 1st City School of Minsk Adam Egorovich Bogdanovich (1862-1940) and his wife Maria Afanasyevna (1869-1896) were financially provided: Adam earned up to 1,500 rubles a year with a ready-made apartment with heating and lighting, located on Troitskaya Hill on Alexandrovskaya Street in Korkozovich's house, in the courtyard, on the second floor; at that time, it housed the 1st parish school and teachers' apartments, later it was house 25 (now there is a section of M. Bogdanovich Street opposite the square near the Opera and Ballet Theater. The firstborn Vadim was born on March 6 (18), 1890, Maxim — November 27 (December 9), 1891 at 9 p.m.");
	WritersArray[9].set("wbeducationdate", "before 1916");
	WritersArray[9].set("wbeducation", "In 1902 Maxim entered the Nizhny Novgorod Men's Gymnasium. During the Revolution of 1905, he took part in student and student demonstrations, for which he received the certification of an unreliable student. In 1906, Maxim V. Semov's godmother subscribed to the newspaper Our Share for him, and then Our field. At the end of the year, Bogdanovich sends Belarusian books and newspapers to a revolutionary of Belarusian origin Stepan Zenchenko in a Nizhny Novgorod prison. After graduating from the gymnasium in 1911, he visits Vilna, meets Vaclav Lastovsky, Anton and Ivan Lutskevich and other figures of the Belarusian Renaissance. While in Vilna, the young poet got acquainted with the collections of ancient rarities in the private museum of the Lutskevich brothers, and under their impression he wrote a poem Slutsk Weavers. In this work, the author tells the sad story of the serf weavers, poetizing the skill of the craftsmen to weave golden belts, where they add instead of the Persian pattern, the flower of the native cornflower. In the same year, Maxim Bogdanovich intended to enter the Philological Faculty of St. Petersburg University, but due to lack of funds and the damp climate of the capital, he returned to Yaroslavl, enrolling in the Demidovsky Law Lyceum. According to his father, the inner side of Maxim Bogdanovich's life was almost entirely absorbed by his teaching as preparation for social and literary work, his writing, his creativity; there was very little time and energy left for everything else. A lot of time was spent on the study of Western European and Slavic languages and literatures, especially on the study of the Belarusian language, history, ethnography, literature. During his studies, he collaborates in the Yaroslavl newspaper Golos; writes a lot, is published in various Russian and Belarusian publications, becomes famous.");
	WritersArray[9].set("wbartdate", "1907 — 1917");
	WritersArray[9].set("wbart", "According to literary critic I. I. Zamotin (1873-1942), Bogdanovich's work reflected literary searches and pre-revolutionary moods of the beginning of the century, the Belarusian renaissance and antiquity, personal experiences; many of his poems and stories have a common sad flavor caused by a controversial era, as well as conditioned by the poet's illness and a premonition of the near end; but Bogdanovich believes in the renewal of life and waits for him with hope. Maxim Bogdanovich created many beautiful examples of civic, landscape, philosophical lyrics; he wrote a number of love poems dedicated to Anna Kokuyeva (a Yaroslavl acquaintance of the poet, with whom he was in love). Bogdanovich's lyrics are closely connected with oral folk poetry, national liberation ideas, imbued with love for the working people. In some verses there is a protest against the world of violence and social injustice");
	WritersArray[9].set("wbdiedate", "May 25, 1917");
	WritersArray[9].set("wbdie", "In February 1917, the poet's friends raised money so that he could go to the Crimea to be treated for tuberculosis. But the treatment did not help. Maxim Bogdanovich died at dawn on May 13 (25), 1917 at the age of 25 (blood came from his throat).");

	let iWriterNum;
	let searchParams = new URLSearchParams(window.location.search);

	// Get from URL, otherwise randomize
	if (searchParams.has(szWriterUrlParam))
	{
		iWriterNum = searchParams.get(szWriterUrlParam);
	
		if (iWriterNum > 4 || iWriterNum < 0)
			iWriterNum = 0
	}
	else 
		iWriterNum = Math.floor(Math.random() * iWriterCount); // 0..4

	iWriterNum *= 2; // For lang translation

	const szLangUrlParam = "lang";
	let szLang;

	searchParams = new URLSearchParams(window.location.search);

	// Get from URL, otherwise - RU
	if (searchParams.has(szLangUrlParam))
	{
		szLang = searchParams.get(szLangUrlParam);
		if (szLang != 'RU' && szLang != 'EN')
		{
			alert(szLang);
			szLang = "RU";
		}
	}
	else
	{
		szLang = "RU";
	}

	$("#lname").text(szLang);

	$("#wphoto").attr("src", "images/" + WritersArray[iWriterNum].get("wphoto"));
	$("#wimages1").attr("src", "images/" + WritersArray[iWriterNum].get("wimages1"));
	$("#wimages2").attr("src", "images/" + WritersArray[iWriterNum].get("wimages2"));
	$("#wimages3").attr("src", "images/" + WritersArray[iWriterNum].get("wimages3"));
	$("#wvideo").attr("src", WritersArray[iWriterNum].get("wvideo"));
	$("#wmap").attr("src", WritersArray[iWriterNum].get("wmap"));

	if (szLang == "RU")
	{
		$("#lswitch").attr("href", "index.html?writer=" + (iWriterNum/2).toString() + "&lang=EN");
		$("#lmain").attr("href", "index.html?lang=RU");

		$("#lmain").text("Главная");
		$("#lnav").text("Навигация");
		$("#llang").text("Язык");
		$("#lbio").text("Биография");
		$("#lborn").text("Рождение");
		$("#leducation").text("Образование");
		$("#lart").text("Искусство");
		$("#ldie").text("Смерть");
		$("#lgallery").text("Галерея");
		$("#lvideo").text("Видео");
		$("#lmap").text("Карта");
		$("#ldev1").text("Кокарев Рома");
		$("#ldevinfo1").text("Чёрный чай захватит мир");
		$("#ldev2").text("Матюшенко Владик");
		$("#ldevinfo2").text("Люблю жареных и вареных рыб");
		$("#ldev2").text("Тарабарова Арина");
		$("#ldevinfo2").text("Чёрный чай захватит мир");

		$("#wname").text(WritersArray[iWriterNum].get("wname"));	
		$("#wborndie").html(WritersArray[iWriterNum].get("wborndie"));	
		$("#wbborndate").text(WritersArray[iWriterNum].get("wbborndate"));	
		$("#wbborn").text(WritersArray[iWriterNum].get("wbborn"));	
		$("#wbeducationdate").text(WritersArray[iWriterNum].get("wbeducationdate"));	
		$("#wbeducation").text(WritersArray[iWriterNum].get("wbeducation"));	
		$("#wbartdate").text(WritersArray[iWriterNum].get("wbartdate"));	
		$("#wbart").text(WritersArray[iWriterNum].get("wbart"));	
		$("#wbdiedate").text(WritersArray[iWriterNum].get("wbdiedate"));	
		$("#wbdie").text(WritersArray[iWriterNum].get("wbdie"));	
	}
	else 
	{
		$("#lswitch").attr("href", "index.html?writer=" + (iWriterNum/2).toString() + "&lang=RU");
		$("#lmain").attr("href", "index.html?lang=EN");

		$("#lmain").text("Home");
		$("#lnav").text("Navigation");
		$("#llang").text("Language");
		$("#lbio").text("Biography");
		$("#lborn").text("Born");
		$("#leducation").text("Education");
		$("#lart").text("Art");
		$("#ldie").text("Death");
		$("#lgallery").text("Gallery");
		$("#lvideo").text("Video");
		$("#lmap").text("Map");
		$("#ldev1").text("Kokarev Roma");
		$("#ldevinfo1").text("Black tea will own the world");
		$("#ldev2").text("Matushenko Vladik");
		$("#ldevinfo2").text("Like fried and boiled fish");
		$("#ldev3").text("Tarabarova Arina");
		$("#ldevinfo3").text("Black tea will own the world");

		iWriterNum += 1; // Because EN after RU
		$("#wname").text(WritersArray[iWriterNum].get("wname"));	
		$("#wborndie").html(WritersArray[iWriterNum].get("wborndie"));	
		$("#wbborndate").text(WritersArray[iWriterNum].get("wbborndate"));	
		$("#wbborn").text(WritersArray[iWriterNum].get("wbborn"));	
		$("#wbeducationdate").text(WritersArray[iWriterNum].get("wbeducationdate"));	
		$("#wbeducation").text(WritersArray[iWriterNum].get("wbeducation"));	
		$("#wbartdate").text(WritersArray[iWriterNum].get("wbartdate"));	
		$("#wbart").text(WritersArray[iWriterNum].get("wbart"));	
		$("#wbdiedate").text(WritersArray[iWriterNum].get("wbdiedate"));	
		$("#wbdie").text(WritersArray[iWriterNum].get("wbdie"));	
	}

});