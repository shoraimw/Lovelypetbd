"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  Heart,
  Menu,
  MessageCircle,
  PawPrint,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  X
} from "lucide-react";
import {
  collections,
  featuredBrands,
  petCategories,
  petFilters,
  type PetKey
} from "@/data/catalog";

const PHONE_PRIMARY = "+8801973005177";
const PHONE_SECONDARY = "+8801973005155";
const WHATSAPP_NUMBER = "8801973005177";

export function Storefront() {
  const [query, setQuery] = useState("");
  const [selectedPet, setSelectedPet] = useState<PetKey>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent("Hello Lovely Pet BD! I would like help finding the right products for my pet.");

  const filteredCollections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return collections.filter((collection) => {
      const matchesPet =
        selectedPet === "all" || collection.pets.includes(selectedPet);
      const searchableText = [
        collection.title,
        collection.eyebrow,
        collection.description,
        ...collection.keywords
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesPet && matchesQuery;
    });
  }, [query, selectedPet]);

  function scrollToCollections() {
    document
      .getElementById("collections")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    scrollToCollections();
  }

  function selectPet(pet: PetKey) {
    setSelectedPet(pet);
    setQuery("");
    scrollToCollections();
  }

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="announcement-bar">
        <div className="announcement-inner page-shell">
          <p><Sparkles size={14} strokeWidth={2.2} /> A little more joy in every pawprint.</p>
          <a href={"tel:" + PHONE_PRIMARY}>
            Need a hand? <strong>Call our team</strong>
            <span className="announcement-phone">{PHONE_PRIMARY}</span>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="header-main page-shell">
          <a className="brand" href="#" aria-label="Lovely Pet BD home">
            <span className="brand-symbol"><PawPrint size={25} strokeWidth={2.5} /></span>
            <span className="brand-copy">
              <span className="brand-name">Lovely<span>Pet</span></span>
              <span className="brand-tagline">HAPPY PETS. HAPPY HOMES.</span>
            </span>
          </a>

          <form className="search-form" onSubmit={handleSearch} role="search">
            <Search size={19} />
            <input
              aria-label="Search pet categories and collections"
              placeholder="Search food, litter, toys & more..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query.length > 0 ? (
              <button className="search-clear" type="button" aria-label="Clear search" onClick={() => setQuery("")}>
                <X size={16} />
              </button>
            ) : null}
            <button className="search-submit" type="submit">Search</button>
          </form>

          <div className="header-actions">
            <a className="header-action" href={"tel:" + PHONE_PRIMARY}>
              <span className="header-action-icon"><Phone size={19} /></span>
              <span><small>Talk to us</small><strong>01973-005177</strong></span>
            </a>
            <a className="header-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Lovely Pet BD on WhatsApp">
              <MessageCircle size={18} /><span>WhatsApp</span>
            </a>
          </div>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-inner page-shell">
            <button className="nav-browse" onClick={scrollToCollections}>
              <Menu size={17} /> Browse collections <ChevronDown size={14} />
            </button>
            <div className="nav-links">
              {petCategories.map((category) => (
                <button className="nav-link" key={category.id} onClick={() => selectPet(category.id)}>
                  {category.name}
                </button>
              ))}
            </div>
            <a className="nav-offers" href="#collections">
              <Sparkles size={15} /> Explore all essentials <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>

        {mobileMenuOpen ? (
          <div className="mobile-menu page-shell">
            <p className="mobile-menu-label">SHOP BY PET</p>
            {petCategories.map((category) => (
              <button key={category.id} onClick={() => selectPet(category.id)}>
                {category.name}<ChevronRight size={17} />
              </button>
            ))}
            <a href="#collections" onClick={() => setMobileMenuOpen(false)}>
              Browse all collections <ArrowRight size={17} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Chat with us on WhatsApp <MessageCircle size={17} />
            </a>
          </div>
        ) : null}
      </header>

      <div id="main-content">
        <section className="hero-section">
          <div className="hero-shell page-shell">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> FOR EVERY PAW, WING & LITTLE THING</div>
              <h1>Their world is small.<br /><span>Our love is big.</span></h1>
              <p className="hero-description">
                From everyday nutrition to little moments of play, find thoughtful essentials for the companions who make life lovelier.
              </p>
              <div className="hero-buttons">
                <button className="button button-primary" onClick={scrollToCollections}>
                  Explore the shop <ArrowRight size={17} />
                </button>
                <a className="button button-soft" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} /> Ask us anything
                </a>
              </div>
              <div className="hero-footnote">
                <span className="hero-footnote-icon"><PawPrint size={17} /></span>
                <span><strong>Made for pet people.</strong><small>Here for the everyday moments that matter.</small></span>
              </div>
            </div>

            <div className="hero-art" aria-label="Pet photography">
              <div className="hero-image-main">
                <img
                  src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1400&q=90"
                  alt="A beautiful cat looking curiously at the camera"
                  fetchPriority="high"
                />
              </div>
              <div className="hero-image-small">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=85"
                  alt="A happy dog enjoying the outdoors"
                />
              </div>
              <div className="hero-floating-note">
                <span className="floating-note-icon"><Heart size={17} fill="currentColor" /></span>
                <span><strong>All the little loves</strong><small>In one happy place</small></span>
              </div>
              <div className="hero-sparkle sparkle-one"><Sparkles size={22} /></div>
              <div className="hero-sparkle sparkle-two"><PawPrint size={24} /></div>
              <div className="hero-orbit" />
            </div>
          </div>
          <div className="hero-bottom page-shell">
            <span>GOOD DAYS START WITH HAPPY PETS</span>
            <span className="hero-bottom-line" />
            <span>CAT · DOG · BIRD · SMALL PETS · AQUA</span>
          </div>
        </section>

        <section className="benefit-strip" aria-label="Lovely Pet shopping highlights">
          <div className="benefit-inner page-shell">
            <div className="benefit-item">
              <span className="benefit-icon mint"><PawPrint size={21} /></span>
              <span><strong>For every kind of pet</strong><small>From paws to fins</small></span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon peach"><ShieldCheck size={21} /></span>
              <span><strong>Thoughtful choices</strong><small>Explore everyday essentials</small></span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon lilac"><MessageCircle size={21} /></span>
              <span><strong>Friendly support</strong><small>We’re happy to help</small></span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon butter"><Truck size={21} /></span>
              <span><strong>Easy to get in touch</strong><small>Call or message our team</small></span>
            </div>
          </div>
        </section>

        <section className="section-block pets-section page-shell" id="pets">
          <div className="section-heading">
            <div>
              <p className="section-kicker">A STORE FOR EVERY STORY</p>
              <h2>Who are we shopping for <span>today?</span></h2>
              <p className="section-description">Pick your little companion and discover a world of essentials made around them.</p>
            </div>
            <button className="text-link" onClick={scrollToCollections}>View all collections <ArrowRight size={17} /></button>
          </div>

          <div className="pet-category-grid">
            {petCategories.map((category) => (
              <button className={"pet-category-card " + category.tone} key={category.id} onClick={() => selectPet(category.id)}>
                <span className="pet-category-image">
                  <img src={category.image} alt={category.imageAlt} loading="lazy" />
                </span>
                <span className="pet-category-copy">
                  <strong>{category.name}</strong>
                  <small>{category.description}</small>
                </span>
                <span className="pet-category-arrow"><ArrowUpRight size={17} /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="collections-section" id="collections">
          <div className="page-shell">
            <div className="section-heading collections-heading">
              <div>
                <p className="section-kicker">THE GOOD STUFF, ALL IN ONE PLACE</p>
                <h2>Find their <span>everyday favourites.</span></h2>
                <p className="section-description">Explore the little things that make feeding, caring and playing feel easier.</p>
              </div>
              <div className="collections-heading-mark"><PawPrint size={30} /></div>
            </div>

            <div className="collection-toolbar">
              <div className="filter-tabs" role="group" aria-label="Filter collections by pet">
                {petFilters.map((filter) => (
                  <button
                    className={selectedPet === filter.id ? "filter-tab active" : "filter-tab"}
                    key={filter.id}
                    onClick={() => setSelectedPet(filter.id)}
                    aria-pressed={selectedPet === filter.id}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <div className="collection-search-state">
                <Search size={15} />
                <span>{query ? "Searching: " + query : filteredCollections.length + " collections to explore"}</span>
              </div>
            </div>

            {filteredCollections.length > 0 ? (
              <div className="collection-grid">
                {filteredCollections.map((collection, index) => (
                  <article className={"collection-card collection-card-" + (index % 4)} key={collection.id}>
                    <a className="collection-image" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={"Ask about " + collection.title}>
                      <img src={collection.image} alt={collection.imageAlt} loading="lazy" />
                      <span className="collection-image-arrow"><ArrowUpRight size={18} /></span>
                    </a>
                    <div className="collection-card-copy">
                      <p className="collection-eyebrow">{collection.eyebrow}</p>
                      <h3>{collection.title}</h3>
                      <p>{collection.description}</p>
                      <a className="collection-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                        Ask about this collection <ArrowRight size={15} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span><Search size={24} /></span>
                <h3>No collections found just yet</h3>
                <p>Try another search or choose a different pet category.</p>
                <button className="button button-primary" onClick={() => { setQuery(""); setSelectedPet("all"); }}>
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="feature-section page-shell">
          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1300&q=85"
              alt="Two dogs enjoying a walk together"
              loading="lazy"
            />
            <span className="feature-image-sticker"><Heart size={16} fill="currentColor" /> Little moments matter</span>
          </div>
          <div className="feature-copy">
            <p className="section-kicker">A LITTLE LOVE GOES A LONG WAY</p>
            <h2>Good care is made of <span>little things.</span></h2>
            <p>
              The right meal. A clean, cosy corner. A favourite toy. A little extra care.
              It all adds up to a happier everyday for the pets who make your world.
            </p>
            <ul className="feature-check-list">
              <li><BadgeCheck size={18} /> Everyday food and nutrition</li>
              <li><BadgeCheck size={18} /> Comfort, hygiene and grooming</li>
              <li><BadgeCheck size={18} /> Playtime and little adventures</li>
            </ul>
            <button className="button button-primary" onClick={scrollToCollections}>
              Find their essentials <ArrowRight size={17} />
            </button>
          </div>
        </section>

        <section className="brand-section">
          <div className="page-shell">
            <div className="brand-section-heading">
              <p className="section-kicker">A FEW FAMILIAR FAVOURITES</p>
              <h2>Explore brands pet parents know.</h2>
            </div>
            <div className="brand-list">
              {featuredBrands.map((brand, index) => (
                <span className={"brand-word brand-word-" + (index % 4)} key={brand}>{brand}</span>
              ))}
            </div>
            <p className="brand-note">Brand availability and product options may vary. Contact us for current details.</p>
          </div>
        </section>

        <section className="help-section page-shell" id="contact">
          <div className="help-card">
            <div className="help-decoration help-decoration-one"><PawPrint size={58} /></div>
            <div className="help-decoration help-decoration-two"><Heart size={34} /></div>
            <div className="help-copy">
              <p className="section-kicker">REAL PEOPLE. PET-LOVING HELP.</p>
              <h2>Not sure what your pet needs?</h2>
              <p>Tell us a little about your companion. We’ll help you find a good place to start.</p>
            </div>
            <div className="help-actions">
              <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <a className="help-phone" href={"tel:" + PHONE_PRIMARY}><Phone size={16} /> {PHONE_PRIMARY}</a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="footer-main page-shell">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#" aria-label="Lovely Pet BD home">
              <span className="brand-symbol"><PawPrint size={25} strokeWidth={2.5} /></span>
              <span className="brand-copy">
                <span className="brand-name">Lovely<span>Pet</span></span>
                <span className="brand-tagline">HAPPY PETS. HAPPY HOMES.</span>
              </span>
            </a>
            <p>A little more joy in every pawprint. Discover everyday essentials for the companions you love.</p>
            <a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> Say hello on WhatsApp
            </a>
          </div>

          <div className="footer-links-column">
            <h3>Explore</h3>
            <a href="#pets">Shop by pet</a>
            <a href="#collections">Browse collections</a>
            <a href="#collections" onClick={() => setSelectedPet("cat")}>Cat essentials</a>
            <a href="#collections" onClick={() => setSelectedPet("dog")}>Dog essentials</a>
          </div>

          <div className="footer-links-column">
            <h3>Get in touch</h3>
            <a href={"tel:" + PHONE_PRIMARY}><Phone size={15} /> {PHONE_PRIMARY}</a>
            <a href={"tel:" + PHONE_SECONDARY}><Phone size={15} /> {PHONE_SECONDARY}</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp support</a>
          </div>

          <div className="footer-address-column">
            <h3>Visit us</h3>
            <p>398, South Goran, Khilgaon,<br />Dhaka-1219, Bangladesh</p>
            <span className="footer-address-note">Please contact us before visiting.</span>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="page-shell footer-bottom-inner">
            <span>© {new Date().getFullYear()} Lovely Pet BD. All rights reserved.</span>
            <span>Made with <Heart size={13} fill="currentColor" /> for the love of pets.</span>
          </div>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Lovely Pet BD on WhatsApp">
        <MessageCircle size={23} /><span>Need help?</span>
      </a>
    </main>
  );
}
