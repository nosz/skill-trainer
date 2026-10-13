# Ninox University (Sammel-Dashboard)

**Datei:** `ninox_university_dashboard.html` (eine Datei, offline, Version 1.0.0), dazu `ninox_university_dashboard_vorschau.jpg` (Link-Vorschau, 1200 x 630)
**Aufbau und Pflege:** siehe `references/ninox_university.md` im Skill `trainer-app-bauen`.

## Stand
- Eine Oberfläche für alle Ninox-Lern-Apps: Hero mit Empfehlung "Weiter lernen", Kennzahlen (Lern-Apps, Lektionen bestanden, Fragen, abgeschlossene Apps), Suche und Filter (KI und Skills, Ninox Script, Einsteiger, Fortgeschritten, Profi), Karten je App mit Status, Fortschrittsbalken, Zertifikatsname und aufklappbarer Lektionsliste mit Haken, zwei Lernpfade, Deutsch und Englisch, Hell und Dunkel.
- **Persönlicher Fortschritt:** liest die `localStorage`-Schlüssel der Apps (gleiche 75-%-Regel), lädt nichts hoch. Voraussetzung: Dashboard und Apps unter derselben Adresse.
- Speicher: nur die Sprache (`ninox_university_lang`).

| Schritt | App | Datei | Lektionen | Fragen | Stufe |
|---|---|---|---|---|---|
| 1 | Professionelles Prompten | `professionelles_prompten_lern_app.html` | 10 | 45 | Einstieg bis Experte |
| 2 | KI verstehen: Prompt, Skill, MCP, Loop, Agent | `prompt_skill_agent_mcp_lern_app.html` | 9 | 40 | Einstieg bis Profi |
| 3 | Skill-Trainer | `skills_lern_app.html` (Kopie von `skill_trainer.html`) | 12 | 60 | Einstieg bis Profi |
| 4 | Ninox-Script-Trainer | `ninox_script_lern_app.html` (Kopie von `ninox-script-trainer.html`) | 10 | 56 | Einstieg bis Fortgeschritten |
| 5 | Rollen und Rechte in Ninox4 | `ninox4_rollen_rechte_lern_app.html` | 8 | 37 | Einstieg bis Profi |

Insgesamt 5 Lern-Apps, 49 Lektionen, 238 Fragen.

## Empfohlene Reihenfolge (Lehrplan) und Begründung

Leitlinie: **Verstehen, Anwenden, Bauen, Absichern.** Jede App hat im Dashboard ein "Warum jetzt".

1. **Professionelles Prompten** zuerst: Grundlage für alles mit KI, ohne Vorkenntnisse; die Fähigkeiten daraus braucht jede folgende App.
2. **KI verstehen** danach: baut auf dem Prompten auf und ordnet Skill, Tools, MCP, Loop und Agent in einen Zusammenhang ein.
3. **Skill-Trainer**: wendet den Baustein Skill praktisch an (anlegen, ablegen, prüfen); setzt Schritt 1 und 2 voraus.
4. **Ninox-Script-Trainer**: ab hier Ninox selbst bauen; die KI-Grundlagen helfen beim Schreiben und Prüfen von Scripts.
5. **Rollen und Rechte in Ninox4** zum Schluss: absichern, was gebaut wurde (Rollen, Rechte, Einladen, API-Schlüssel; enthält Script-Funktionen).

Lernpfade im Dashboard: **Empfohlene Reihenfolge** (alle fünf), **KI-Kompetenz** (1 bis 3, auch ohne Ninox nützlich) und **Ninox 4 bauen und absichern** (4 und 5). Die Empfehlung "Als Nächstes" folgt der Gesamtreihenfolge. Alternative für Administratoren ohne Programmierung: Schritt 5 direkt nach Schritt 1; das Dashboard lässt jede Reihenfolge zu.
## Entscheidungen
- **Aufgenommen** (Auswahl des Nutzers): die Ninox-Apps (zuerst drei, später "Rollen und Rechte in Ninox4"). Nicht aufgenommen: FC Bayern und Wirtschaftskreislauf (keine Ninox-Themen).
- **Name und Adresse:** `ninox_university_dashboard`, `https://nosz.github.io/skill-trainer/ninox_university_dashboard.html`. Der ganze Ordner `ninox_university` gehört flach auf dieselbe Adresse (`https://nosz.github.io/skill-trainer/`).
- **Logo und Look:** Ninox-Logo der Vorlage (Link `https://ninox.com/de`), Ninox-Look. Knöpfe und aktive Zustände nutzen ein dunkleres Blau (`#2f52e0`, im Dunkelmodus `#3f63e8`), weil weißer Text auf dem Markenblau `#4970ff` nur etwa 4,2:1 Kontrast hat.
- **Kopien:** Die Apps im Ordner sind Kopien. Quelle der Wahrheit bleiben die Originalordner; nach jeder Änderung an einer App die Kopie erneuern. Ältere Apps haben regelkonforme Dateinamen erhalten, ihre Speicher-Schlüssel (`skillslernen_prog_v5`, `ninoxscript_prog_v1`) sind unverändert.

## Tests (13.10.2026)
- Dashboard: 17 Prüfungen bestanden (Fortschritt aus Text- und JSON-Zertifikat, Suche, Filter, Sprache, kaputter und blockierter Speicher, App-Links, Namen der Bedienelemente, Handybreite 360/320/300 px im iframe).
- Echter Weg: In der KI-App, im Skill-Trainer und im Ninox-Script-Trainer Lektionen gespielt; das Dashboard zeigte Status, Balken und Haken korrekt.
- Kontrast hell und dunkel mindestens 5:1 bei Knöpfen, Karten, Statusplaketten und Haken.
- Die vier neuen Lern-Apps bestehen die aktualisierte Testsuite (mit Handybreite im iframe). Die älteren Apps (Skill-Trainer, Ninox-Script-Trainer) sind nicht mit der automatischen Suite getestet (andere Zertifikat- und Speicher-Struktur); sie laden, und ihr Fortschritt wird vom Dashboard korrekt gelesen.

## Offene Punkte
- Die Apps haben **keinen Link zurück zur Ninox University**; man kommt über die Zurück-Taste des Browsers zurück. Ein Link in der Fußzeile jeder App wäre eine sinnvolle Ergänzung (benötigt Änderung an den Apps).
- Die Link-Vorschau der drei älteren Apps fehlt (nur das Dashboard und die KI-App haben `og:`-Tags und Bild).
- Weißer Text auf dem Markenblau `#4970ff` in den Apps im Ninox-Look hat nur etwa 4,2:1 Kontrast (unter 4,5:1).
- Unsicherheiten der Inhalte der älteren Apps wurden nicht neu geprüft.
- Handy (Touch), Dunkelmodus auf einem Gerät und die Darstellung der Link-Vorschau in Messengern ungeprüft.

## Änderungsprotokoll
- 1.0.0: Erstfassung mit drei Lern-Apps und zwei Lernpfaden.
- 1.1.0 (inhaltlich, Datei trägt weiterhin VERSION 1.0.0): vierte App "Rollen und Rechte in Ninox4", neuer Filter "Ninox 4", neuer Lernpfad, Vorschau und Beschreibung auf vier Apps angepasst.
- 1.2.0 (inhaltlich, Datei trägt weiterhin VERSION 1.0.0): fünfte App "Professionelles Prompten", Reihenfolge nach Lehrplan (Schritt 1 bis 5 mit "Warum jetzt"), neue Lernpfade, Vorschau und Beschreibung auf fünf Apps angepasst.
