function handleBookData(books) {
  return books.map(book => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0] || "",
      publishedDate: book.volumeInfo.publishedDate,
      description: book.searchInfo.textSnippet,
      pageCount: book.volumeInfo.pageCount
    };
  });
}

const bookData = [
  {
    kind: "books#volume",
    id: "3Cjz7DKv74MC",
    etag: "dQBrEBnPLOI",
    selfLink: "https://www.googleapis.com/books/v1/volumes/3Cjz7DKv74MC",
    volumeInfo: {
      title: "Warbreaker",
      authors: ["Brandon Sanderson"],
      publisher: "Hachette UK",
      publishedDate: "2011-12-29",
      description:
        "Warbreaker is the story of two sisters - who happen to be princesses, the God King one of them has to marry, a lesser god, and an immortal trying to undo the mistakes he made hundreds of years ago. Theirs is a world in which those who die in glory return as gods to live confined to a pantheon in Hallandren's capital city. A world transformed by BioChromatic magic, a power based on an essence known as breath. Using magic is arduous: breath can only be collected one unit at a time from individual people. But the rewards are great: by using breath and drawing upon the color in everyday objects, all manner of miracles and mischief can be performed. Brandon Sanderson proves again that he is a master of what Tolkien called 'secondary creation,' the invention of whole worlds, complete with magics and myths all their own.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9780575097476"
        },
        {
          type: "ISBN_10",
          identifier: "0575097477"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 688,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 4,
      ratingsCount: 90,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "2.5.5.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=3Cjz7DKv74MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=3Cjz7DKv74MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=3Cjz7DKv74MC&printsec=frontcover&dq=brandon+sanderson&hl=&cd=1&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=3Cjz7DKv74MC&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-3Cjz7DKv74MC"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 1564,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 1408,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=3Cjz7DKv74MC&rdid=book-3Cjz7DKv74MC&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 1564000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 1408000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.co.jp/books/download/Warbreaker-sample-epub.acsm?id=3Cjz7DKv74MC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=3Cjz7DKv74MC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "Warbreaker is the story of two sisters - who happen to be princesses, the God King one of them has to marry, a lesser god, and an immortal trying to undo the mistakes he made hundreds of years ago."
    }
  },
  {
    kind: "books#volume",
    id: "fPaxRwAACAAJ",
    etag: "vuITD41tisY",
    selfLink: "https://www.googleapis.com/books/v1/volumes/fPaxRwAACAAJ",
    volumeInfo: {
      title: "ミストスピリット ―霧のうつし身― 2",
      subtitle: "試されし王",
      authors: ["ブランドン・サンダースン"],
      publishedDate: "2010-04",
      description:
        "ヴェンチャー卿とセト卿、それぞれ強大なふたつの軍に包囲されたルサデルの都に、辺境から帰った“たもちびと”セイズドによってさらなる危機が伝えられた。獰猛な獣人族2万の軍勢が迫っているというのだ。都には難民が押し寄せ、食糧不足が政情不安につながって、王となったエレンドを窮地に追いこんでいる。いっぽう彼の身を守るヴィンは、エレンドの異母弟でもある“霧の落とし子”ゼインの言葉に心揺れていた...。",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "4150205124"
        },
        {
          type: "ISBN_13",
          identifier: "9784150205126"
        }
      ],
      readingModes: {
        text: false,
        image: false
      },
      pageCount: 527,
      printType: "BOOK",
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=fPaxRwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=fPaxRwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      language: "ja",
      previewLink:
        "http://books.google.co.jp/books?id=fPaxRwAACAAJ&dq=brandon+sanderson&hl=&cd=2&source=gbs_api",
      infoLink:
        "http://books.google.co.jp/books?id=fPaxRwAACAAJ&dq=brandon+sanderson&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/%E3%83%9F%E3%82%B9%E3%83%88%E3%82%B9%E3%83%94%E3%83%AA%E3%83%83%E3%83%88_%E9%9C%A7%E3%81%AE%E3%81%86%E3%81%A4%E3%81%97.html?hl=&id=fPaxRwAACAAJ"
    },
    saleInfo: {
      country: "JP",
      saleability: "NOT_FOR_SALE",
      isEbook: false
    },
    accessInfo: {
      country: "JP",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=fPaxRwAACAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "ヴェンチャー卿とセト卿、それぞれ強大なふたつの軍に包囲されたルサデルの都に、辺境から帰った“たもちびと”セイズドによってさらなる危機が伝えられた。獰猛な獣人族2 ..."
    }
  },
  {
    kind: "books#volume",
    id: "caVnDwAAQBAJ",
    etag: "Y9xest3abOM",
    selfLink: "https://www.googleapis.com/books/v1/volumes/caVnDwAAQBAJ",
    volumeInfo: {
      title: "Edgedancer",
      authors: ["Brandon Sanderson"],
      publisher: "Hachette UK",
      publishedDate: "2018-10-18",
      description:
        "Three years ago, Lift asked a goddess to stop her from growing older--a wish she believed was granted. Now, in Edgedancer, the barely teenage nascent Knight Radiant finds that time stands still for no one. Although the young Azish emperor granted her safe haven from an executioner she knows only as Darkness, court life is suffocating the free-spirited Lift, who can't help heading to Yeddaw when she hears the relentless Darkness is there hunting people like her with budding powers. The downtrodden in Yeddaw have no champion, and Lift knows she must seize this awesome responsibility.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781473226593"
        },
        {
          type: "ISBN_10",
          identifier: "1473226597"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 272,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 4,
      ratingsCount: 5,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.3.3.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=caVnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=caVnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=caVnDwAAQBAJ&printsec=frontcover&dq=brandon+sanderson&hl=&cd=3&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=caVnDwAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-caVnDwAAQBAJ"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 1926,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 1733,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=caVnDwAAQBAJ&rdid=book-caVnDwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 1926000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 1733000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.co.jp/books/download/Edgedancer-sample-epub.acsm?id=caVnDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=caVnDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "Three years ago, Lift asked a goddess to stop her from growing older--a wish she believed was granted. Now, in Edgedancer, the barely teenage nascent Knight Radiant finds that time stands still for no one."
    }
  },
  {
    kind: "books#volume",
    id: "VsT3DQAAQBAJ",
    etag: "3ol5kBJzRgg",
    selfLink: "https://www.googleapis.com/books/v1/volumes/VsT3DQAAQBAJ",
    volumeInfo: {
      title: "Oathbringer",
      subtitle: "Book Three of the Stormlight Archive",
      authors: ["Brandon Sanderson"],
      publisher: "Tor Books",
      publishedDate: "2017-11-14",
      description:
        "The #1 New York Times bestselling sequel to Words of Radiance, from epic fantasy author Brandon Sanderson at the top of his game. In Oathbringer, the third volume of the New York Times bestselling Stormlight Archive, humanity faces a new Desolation with the return of the Voidbringers, a foe with numbers as great as their thirst for vengeance. Dalinar Kholin’s Alethi armies won a fleeting victory at a terrible cost: The enemy Parshendi summoned the violent Everstorm, which now sweeps the world with destruction, and in its passing awakens the once peaceful and subservient parshmen to the horror of their millennia-long enslavement by humans. While on a desperate flight to warn his family of the threat, Kaladin Stormblessed must come to grips with the fact that the newly kindled anger of the parshmen may be wholly justified. Nestled in the mountains high above the storms, in the tower city of Urithiru, Shallan Davar investigates the wonders of the ancient stronghold of the Knights Radiant and unearths dark secrets lurking in its depths. And Dalinar realizes that his holy mission to unite his homeland of Alethkar was too narrow in scope. Unless all the nations of Roshar can put aside Dalinar’s blood-soaked past and stand together—and unless Dalinar himself can confront that past—even the restoration of the Knights Radiant will not prevent the end of civilization. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9780765399830"
        },
        {
          type: "ISBN_10",
          identifier: "0765399830"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 1248,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 4,
      ratingsCount: 15,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.13.13.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=VsT3DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=VsT3DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=VsT3DQAAQBAJ&printsec=frontcover&dq=brandon+sanderson&hl=&cd=4&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=VsT3DQAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-VsT3DQAAQBAJ"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 2019,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 1817,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=VsT3DQAAQBAJ&rdid=book-VsT3DQAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 2019000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 1817000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=VsT3DQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The ..."
    }
  },
  {
    kind: "books#volume",
    id: "Df6WDgAAQBAJ",
    etag: "lN5efUolgrk",
    selfLink: "https://www.googleapis.com/books/v1/volumes/Df6WDgAAQBAJ",
    volumeInfo: {
      title: "Brandon Sanderson's Fantasy Firsts",
      subtitle:
        "(The Way of Kings, Mistborn: The Final Empire, Rithmatist, Alcatraz vs. The Evil Librarians)",
      authors: ["Brandon Sanderson"],
      publisher: "Macmillan",
      publishedDate: "2017-06-13",
      description:
        "This discounted ebundle includes: The Way of Kings, Mistborn: The Final Empire, Rithmatist, Alcatraz vs. The Evil Librarians From #1 New York Times bestselling author of The Stormlight Archive and the Mistborn Saga, this bundle offers four entry points into the worlds of Brandon Sanderson. Mistborn: The Final Empire begins the Mistborn Saga, The Way of Kings the Stormlight Archive, Rithmatist, the first book in the duology, and Alcatraz vs. The Evil Librarians a series by the same name. Prepare yourself to be whisked away to the fantastical worlds of Brandon Sanderson. The Way of Kings — In a war that makes no sense, where ten armies fight separately against a single foe, Kaladin struggles to save his men and to fathom the leaders who consider them expendable. Brightlord Dalinar Kholin commands one of those other armies. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity. Mistborn: The Final Empire — Kelsier, a brilliant thief has turned his talents to the ultimate caper, with the Lord Ruler as the mark. Kel's plan is the ultimate long shot, until luck brings a ragged girl named Vin into the fold. But she will have to learn to trust if she is to master powers of which she never dreamed. The Rithmatist — Assigned to help the professor who is investigating the kidnapping of student Rithmatists, Joel and his friend Melody find themselves on the trail of an unexpected discovery—one that will change Rithmatics—and their world—forever. Alcatraz vs. The Evil Librarians — On his thirteenth birthday, foster child Alcatraz Smedry gets a bag of sand in the mail-his only inheritance from his father and mother. It is quickly stolen by the cult of Evil Librarians. Alcatraz must stop them, using the only weapon he has: an incredible talent for breaking things. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer (forthcoming) The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9780765399557"
        },
        {
          type: "ISBN_10",
          identifier: "0765399555"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 2208,
      printType: "BOOK",
      categories: ["Young Adult Fiction"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.5.6.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=Df6WDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=Df6WDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=Df6WDgAAQBAJ&printsec=frontcover&dq=brandon+sanderson&hl=&cd=5&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=Df6WDgAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-Df6WDgAAQBAJ"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 3282,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 2954,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=Df6WDgAAQBAJ&rdid=book-Df6WDgAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 3282000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 2954000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=Df6WDgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer (forthcoming) The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages ..."
    }
  },
  {
    kind: "books#volume",
    id: "gCSGBwAAQBAJ",
    etag: "JpmEPyDzhlQ",
    selfLink: "https://www.googleapis.com/books/v1/volumes/gCSGBwAAQBAJ",
    volumeInfo: {
      title: "Perfect State",
      subtitle: "",
      authors: ["Brandon Sanderson"],
      publisher: "Dragonsteel Entertainment",
      publishedDate: "2015-03-31",
      description:
        "A 2016 HUGO AWARD NOMINEE FOR BEST NOVELLA From the author of Legion and the #1 New York Times bestselling Stormlight Archive comes an action-filled novella about privilege, culture clash, and expectations. God-Emperor Kairominas is lord of all he surveys. He has defeated all foes, has united the entire world beneath his rule, and has mastered the arcane arts. He spends his time sparring with his nemesis, who keeps trying to invade Kai's world. Except for today. Today, Kai has to go on a date. Forces have conspired to require him to meet with his equal—a woman from another world who has achieved just as much as he has. What happens when the most important man in the world is forced to have dinner with the most important woman in the world?",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781938570094"
        },
        {
          type: "ISBN_10",
          identifier: "193857009X"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 87,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 3.5,
      ratingsCount: 11,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.1.1.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=gCSGBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=gCSGBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=gCSGBwAAQBAJ&printsec=frontcover&dq=brandon+sanderson&hl=&cd=6&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=gCSGBwAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-gCSGBwAAQBAJ"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 361,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 361,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=gCSGBwAAQBAJ&rdid=book-gCSGBwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 361000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 361000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=gCSGBwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "A 2016 HUGO AWARD NOMINEE FOR BEST NOVELLA From the author of Legion and the #1 New York Times bestselling Stormlight Archive comes an action-filled novella about privilege, culture clash, and expectations."
    }
  },
  {
    kind: "books#volume",
    id: "ZnHFzj4wKIQC",
    etag: "I2cGxVZmRDw",
    selfLink: "https://www.googleapis.com/books/v1/volumes/ZnHFzj4wKIQC",
    volumeInfo: {
      title: "Elantris",
      subtitle: "Tenth Anniversary Author's Definitive Edition",
      authors: ["Brandon Sanderson"],
      publisher: "Macmillan",
      publishedDate: "2007-04-01",
      description:
        "In 2005, Brandon Sanderson debuted with Elantris, an epic fantasy unlike any other then on the market. To celebrate its tenth anniversary, Tor is reissuing Elantris in a special edition, a fresh chance to introduce it to the myriad readers who have since become Sanderson fans. This new edition begins with a preface by author Dan Wells, the first person to read the completed novel, and a new afterword by Sanderson explaining how he came to write the book and its place in the Cosmere, the unified universe of all his Tor novels. Also included is an expanded version of the \"Ars Arcanum\" appendix, with more of the technical details of the book's magic that fans can never get enough of. Elantris was truly a milestone both for Sanderson and for the genre of epic fantasy. It deserves this special treatment, something Tor has done only once before, with Orson Scott Card's Ender's Game. Sanderson fans old and new will be excited to discover it. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer (forthcoming) The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1429914556"
        },
        {
          type: "ISBN_13",
          identifier: "9781429914550"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 496,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 4,
      ratingsCount: 124,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.17.16.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=ZnHFzj4wKIQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=ZnHFzj4wKIQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=ZnHFzj4wKIQC&printsec=frontcover&dq=brandon+sanderson&hl=&cd=7&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=ZnHFzj4wKIQC&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-ZnHFzj4wKIQC"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 1021,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 919,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=ZnHFzj4wKIQC&rdid=book-ZnHFzj4wKIQC&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 1021000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 919000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=ZnHFzj4wKIQC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "This new edition begins with a preface by author Dan Wells, the first person to read the completed novel, and a new afterword by Sanderson explaining how he came to write the book and its place in the Cosmere, the unified universe of all ..."
    }
  },
  {
    kind: "books#volume",
    id: "6uv-CwAAQBAJ",
    etag: "Cx7i1mp3VFI",
    selfLink: "https://www.googleapis.com/books/v1/volumes/6uv-CwAAQBAJ",
    volumeInfo: {
      title: "Arcanum Unbounded: The Cosmere Collection",
      authors: ["Brandon Sanderson"],
      publisher: "Macmillan",
      publishedDate: "2016-11-22",
      description:
        'An all-new 120-page Stormlight Archive novella, "Edgedancer," will be the crown jewel of Arcanum Unbounded: The Cosmere Collection, the first book of short fiction by #1 New York Times bestselling author Brandon Sanderson. The collection will include nine works in all. The first eight are: “The Hope of Elantris” (Elantris) “The Eleventh Metal” (Mistborn) “The Emperor\'s Soul” (Elantris) “Allomancer Jak and the Pits of Eltania, Episodes 28 through 30” (Mistborn) “White Sand" (excerpt; Taldain) "Shadows for Silence in the Forests of Hell” (Threnody) “Sixth of Dusk” (First of the Sun) “Mistborn: Secret History” (Mistborn) These wonderful works, originally published on Tor.com and elsewhere individually, convey the expanse of the Cosmere and tell exciting tales of adventure Sanderson fans have come to expect, including the Hugo Award-winning novella, “The Emperor\'s Soul” and an excerpt from the graphic novel "White Sand." Arcanum Unbounded will also contain the 120-page Stormlight Archive novella "Edgedancer," which will appear in this book for the first time anywhere. It is a story of Lift, taking place between Words of Radiance and the forthcoming Oathbringer. Finally, this collection includes essays and illustrations for the various planetary systems in which the stories are set. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener\'s Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher\'s request, this title is being sold without Digital Rights Management Software (DRM) applied.',
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9780765391179"
        },
        {
          type: "ISBN_10",
          identifier: "0765391171"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 416,
      printType: "BOOK",
      categories: ["Fiction"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.7.7.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=6uv-CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=6uv-CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=6uv-CwAAQBAJ&printsec=frontcover&dq=brandon+sanderson&hl=&cd=8&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=6uv-CwAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-6uv-CwAAQBAJ"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 1021,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 919,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=6uv-CwAAQBAJ&rdid=book-6uv-CwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 1021000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 919000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=6uv-CwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "An all-new 120-page Stormlight Archive novella, &quot;Edgedancer,&quot; will be the crown jewel of Arcanum Unbounded: The Cosmere Collection, the first book of short fiction by #1 New York Times bestselling author Brandon Sanderson."
    }
  },
  {
    kind: "books#volume",
    id: "I6VxCwAAQBAJ",
    etag: "DZS2z12c5AM",
    selfLink: "https://www.googleapis.com/books/v1/volumes/I6VxCwAAQBAJ",
    volumeInfo: {
      title: "Mistborn: Secret History",
      authors: ["Brandon Sanderson"],
      publisher: "Dragonsteel Entertainment, LLC",
      publishedDate: "2016-01-26",
      description:
        "Note: This novella is included in Arcanum Unbounded: The Cosmere Collection, now available in print, ebook, and audiobook from Tor (US/Canada) and Gollancz (UK/Commonwealth). Mistborn: Secret History is a companion story to the original Mistborn Trilogy. As such, it contains huge spoilers for the books Mistborn (The Final Empire), The Well of Ascension, and The Hero of Ages. It also contains very minor spoilers for the book The Bands of Mourning. Mistborn: Secret History builds upon the characterization, events, and worldbuilding of the original trilogy. Reading it without that background will be a confusing process at best. In short, this isn’t the place to start your journey into Mistborn. (Though if you have read the trilogy—but it has been a while—you should be just fine, so long as you remember the characters and the general plot of the books.) Saying anything more here risks revealing too much. Even knowledge of this story’s existence is, in a way, a spoiler. There’s always another secret.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781938570124"
        },
        {
          type: "ISBN_10",
          identifier: "193857012X"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 242,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 4.5,
      ratingsCount: 5,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.6.8.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=I6VxCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=I6VxCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=I6VxCwAAQBAJ&printsec=frontcover&dq=brandon+sanderson&hl=&cd=9&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=I6VxCwAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-I6VxCwAAQBAJ"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 602,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 602,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=I6VxCwAAQBAJ&rdid=book-I6VxCwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 602000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 602000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=I6VxCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "As such, it contains huge spoilers for the books Mistborn (The Final Empire), The Well of Ascension, and The Hero of Ages. It also contains very minor spoilers for the book The Bands of Mourning."
    }
  },
  {
    kind: "books#volume",
    id: "F8u01NaEZU0C",
    etag: "xI7T/notKk8",
    selfLink: "https://www.googleapis.com/books/v1/volumes/F8u01NaEZU0C",
    volumeInfo: {
      title: "Mistborn Trilogy",
      authors: ["Brandon Sanderson"],
      publisher: "Tor Books",
      publishedDate: "2011-02-01",
      description:
        "This discounted ebundle includes: Mistborn: The Final Empire, The Well of Ascension, The Hero of Ages From #1 New York Times bestselling author Brandon Sanderson, the Mistborn trilogy is a heist story of political intrigue and magical, martial-arts action. For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the \"Sliver of Infinity,\" reigned with absolute power and ultimate terror, divinely invincible. This saga dares to ask a simple question: What if the hero of prophecy fails? Mistborn: The Final Empire — Kelsier, a brilliant thief has turned his talents to the ultimate caper, with the Lord Ruler as the mark. Kel's plan is the ultimate long shot, until luck brings a ragged girl named Vin into the fold. But she will have to learn to trust if she is to master powers of which she never dreamed. The Well of Ascension — Evil has been defeated; the war has just begun. Vin, the street urchin who has become the most powerful Mistborn in the land, and Elend Venture, the idealistic young nobleman who loves her, must build a healthy new society in the ashes of an empire. The Hero of Ages — The Deepness has returned, along with unusually heavy ashfalls and powerful earthquakes. Humanity appears to be doomed. Vin and Eland investigate the past to save the future, and in the end, sacrifices must be made. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer (forthcoming) The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781429989817"
        },
        {
          type: "ISBN_10",
          identifier: "1429989815"
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 1712,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 4.5,
      ratingsCount: 58,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "2.55.51.0.preview.2",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=F8u01NaEZU0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=F8u01NaEZU0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.co.jp/books?id=F8u01NaEZU0C&printsec=frontcover&dq=brandon+sanderson&hl=&cd=10&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=F8u01NaEZU0C&source=gbs_api",
      canonicalVolumeLink:
        "https://market.android.com/details?id=book-F8u01NaEZU0C"
    },
    saleInfo: {
      country: "JP",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 2019,
        currencyCode: "JPY"
      },
      retailPrice: {
        amount: 1817,
        currencyCode: "JPY"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=F8u01NaEZU0C&rdid=book-F8u01NaEZU0C&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 2019000000,
            currencyCode: "JPY"
          },
          retailPrice: {
            amountInMicros: 1817000000,
            currencyCode: "JPY"
          }
        }
      ]
    },
    accessInfo: {
      country: "JP",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=F8u01NaEZU0C&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer (forthcoming) The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages ..."
    }
  }
];

export { bookData, handleBookData };
