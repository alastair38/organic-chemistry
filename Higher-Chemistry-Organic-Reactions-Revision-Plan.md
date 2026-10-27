# SQA Higher Chemistry: Organic Reactions Revision Plan & Study Guide
**Unit 2: Nature's Chemistry (with links to Unit 1 & Unit 3)**

---

## How to Use This Revision Plan

Organic chemistry in SQA Higher Chemistry is built around **functional groups** and **interconversions**. Rather than memorising isolated facts, the fastest way to gain top marks is to understand:
1. **Which functional group** is present in the reactant(s).
2. **What type of reaction** is occurring (addition, oxidation, condensation, hydrolysis, elimination, or neutralisation).
3. **Which bonds break and form**, and what **reagents, catalysts, and laboratory conditions** are required.

This guide is structured into:
- **Part 1:** A **4-Stage Revision Plan** (spaced repetition + active recall).
- **Part 2:** **Master Organic Reaction Pathway Map & Summary Table**.
- **Part 3:** **Deep-Dive Reaction Guides** with full structural diagrams, processes, and laboratory setups.
- **Part 4:** **24 Active-Recall Flashcards** (click to reveal answers in Markdown viewers).
- **Part 5:** **Multi-Format Practice Quiz** (Multiple Choice, Pathway Completion, Chemical Tests, and SQA 3-Mark Open-Ended Questions).
- **Part 6:** **Curated Videos, Past Papers & External Resources**.

> **Interactive Companion Web App:** Open `index.html` in any web browser for the interactive version featuring clickable SVG reaction pathway maps, step-by-step bond-breaking animations, 3D-flip flashcards, an interactive test-tube colour simulator, and auto-graded quizzes.

---

## Part 1: 4-Stage Revision Plan

| Stage | Focus Area | Core Learning Objectives | Active Practice Tasks |
| :--- | :--- | :--- | :--- |
| **Stage 1** | **Homologous Series, Isomers & Addition/Elimination** | • Name and draw systematic structures up to $\text{C}_8$ (alkanes, alkenes, alcohols, aldehydes, ketones, carboxylic acids, esters).<br>• Classify alcohols as **primary ($1^\circ$)**, **secondary ($2^\circ$)**, or **tertiary ($3^\circ$)**.<br>• Master alkene **addition reactions** (hydrogenation, halogenation, hydration) and alcohol **dehydration**. | • Draw all structural isomers of $\text{C}_4\text{H}_{10}\text{O}$ (alcohols) and classify each as $1^\circ, 2^\circ,$ or $3^\circ$.<br>• Predict major and minor products for unsymmetrical alkene addition (e.g., propene + $\text{H}_2\text{O}$).<br>• Complete Flashcards #1–#6. |
| **Stage 2** | **Oxidation of Alcohols, Aldehydes, Ketones & Antioxidants** | • Define organic **oxidation** (increase in $\text{O:H}$ ratio) and **reduction** (decrease in $\text{O:H}$ ratio).<br>• Trace oxidation pathways for $1^\circ, 2^\circ,$ and $3^\circ$ alcohols.<br>• Memorise all four oxidising agents (acidified dichromate, hot $\text{CuO}$, Fehling's, Tollens') and their exact colour changes.<br>• Explain food rancidity and how **antioxidants** work as reducing agents. | • Calculate $\text{O:H}$ ratios across ethanol $\rightarrow$ ethanal $\rightarrow$ ethanoic acid.<br>• Write ion-electron equations for antioxidants (e.g., ascorbic acid).<br>• Complete the Chemical Tests Simulator (`quiz.html`) and Flashcards #7–#12. |
| **Stage 3** | **Esters, Fats, Oils, Soaps & Emulsifiers** | • Draw and name **esters** from parent alcohols and carboxylic acids.<br>• Explain **condensation (esterification)** and **acid/alkaline hydrolysis**.<br>• Describe the mandatory lab preparation of an ester.<br>• Relate degree of unsaturation in **fats vs oils** to chain packing, London dispersion forces, and melting points.<br>• Explain **saponification** (alkaline hydrolysis of triglycerides), soap micelle action, hard water scum, and **emulsifiers**. | • Sketch the laboratory esterification apparatus and explain the role of $\text{H}_2\text{SO}_4$, the wet paper towel condenser, and $\text{NaHCO}_3$.<br>• Practice drawing a triglyceride from glycerol and 3 fatty acids.<br>• Complete Flashcards #13–#19. |
| **Stage 4** | **Proteins, Terpenes & Full Synthesis Integration** | • Show how **amino acids** undergo condensation to form **peptide (amide) links** ($-\text{CONH}-$).<br>• Explain **protein hydrolysis** (chromatography identification) and **denaturation** (disruption of hydrogen bonds/LDFs by heat or pH).<br>• Identify **isoprene units** (2-methylbuta-1,3-diene, $\text{C}_5\text{H}_8$) in **terpenes** and explain terpene oxidation to terpenoids.<br>• Tackle multi-step synthesis and SQA open-ended questions. | • Complete all 4 quiz sections in `quiz.html`.<br>• Write timed 3-mark responses to the two Open-Ended Questions in Part 5.<br>• Review any flashcards marked *Needs Review*. |

---

## Part 2: Master Organic Reaction Pathway Map

### Visual Overview of Functional Group Interconversions

```text
                                 +------------------+
                                 |     ALKANE       |
                                 |    (C-C only)    |
                                 +------------------+
                                          ^
                                          |  Hydrogenation (+ H2, Ni catalyst)
                                          |
+------------------+             +------------------+   + Br2 (Halogenation)   +------------------+
|  DIHALOALKANE    | <---------- |      ALKENE      | -----------------------> |   TERPENES       |
|  (Br-C-C-Br)     |             |      (C=C)       |   (Isoprene C5H8 units)  | (Unsaturated)    |
+------------------+             +------------------+                          +------------------+
                                    |            ^                                      |
          Hydration (+ H2O, H+ cat) |            | Dehydration (Al2O3 / heat)           | Oxidation [O]
                                    v            |                                      v
      +-----------------------------------------------------------------+      +------------------+
      |                            ALCOHOLS                             |      |   TERPENOIDS     |
      |                        (-OH Hydroxyl)                           |      | (-OH, -CHO, C=O) |
      +-----------------------------------------------------------------+      +------------------+
         |                              |                             |
         | Primary (1°)                 | Secondary (2°)              | Tertiary (3°)
         | + [O] (Distillation)         | + [O] (CuO or Cr2O7^2-/H+)  | + [O]
         v                              v                             v
+------------------+           +------------------+          +------------------+
|     ALDEHYDE     |           |      KETONE      |          |   NO REACTION    |
|  (-CHO terminal) |           |  (-CO- internal) |          | (Resists mild O) |
+------------------+           +------------------+          +------------------+
         |                              |
         | + [O] (Reflux)               | + [O] (Tollens' / Fehling's / Cr2O7^2-)
         | (Tollens', Fehling's,        v
         |  or Cr2O7^2-/H+)      [ NO REACTION ]
         v
+------------------+     + Alcohol (Condensation, conc. H2SO4)    +------------------+
| CARBOXYLIC ACID  | ===========================================> |      ESTER       |
|    (-COOH)       | <=========================================== |    (-COO-)       |
+------------------+     + H2O (Hydrolysis, H+ or OH- catalyst)   +------------------+
         |                                                                 |
         | + Amine / Amino Acid (-NH2)                                     | (Triesters = Fats/Oils)
         | Condensation (-H2O)                                             | Alkaline Hydrolysis (+ NaOH)
         v                                                                 v
+------------------+                                              +------------------+
|  PROTEIN / AMIDE |                                              | GLYCEROL + SOAP  |
| (-CONH- peptide) |                                              | (R-COO- Na+ salt)|
+------------------+                                              +------------------+
```

### Master Summary Table of SQA Higher Reactions

| Reaction Name | Reactants | Reagents / Catalyst / Conditions | Product(s) | Key Observation / Test |
| :--- | :--- | :--- | :--- | :--- |
| **Hydrogenation** (Addition) | Alkene (or unsaturated oil) + $\text{H}_2$ | **Nickel ($\text{Ni}$) catalyst**, heat | Alkane (or hardened saturated fat) | Increases melting point of oils to make solid spreads |
| **Halogenation** (Addition) | Alkene + $\text{Br}_2\text{(aq)}$ | Room temperature, no catalyst required | Dihaloalkane | **Orange/brown bromine solution decolourises immediately** |
| **Hydration** (Addition) | Alkene + $\text{H}_2\text{O(g)}$ | **Acid catalyst** (e.g. conc. $\text{H}_3\text{PO}_4$), high temp/pressure | Alcohol (often a mixture of $1^\circ$ and $2^\circ$ isomers) | Industrial synthesis of ethanol/propan-2-ol |
| **Dehydration** (Elimination) | Alcohol | Heated **aluminium oxide ($\text{Al}_2\text{O}_3$)** catalyst or conc. $\text{H}_2\text{SO}_4$ | Alkene + $\text{H}_2\text{O}$ | Gas collected over water decolourises $\text{Br}_2\text{(aq)}$ |
| **Oxidation of $1^\circ$ Alcohol** | Primary Alcohol | $\text{K}_2\text{Cr}_2\text{O}_7/\text{H}^+$ or hot $\text{CuO}$ | **Aldehyde** (distillation) $\rightarrow$ **Carboxylic Acid** (reflux) + $\text{H}_2\text{O}$ | Dichromate: **Orange $\rightarrow$ Green**; $\text{CuO}$: **Black $\rightarrow$ Brown/pink** |
| **Oxidation of $2^\circ$ Alcohol** | Secondary Alcohol | $\text{K}_2\text{Cr}_2\text{O}_7/\text{H}^+$ or hot $\text{CuO}$ | **Ketone** + $\text{H}_2\text{O}$ | Dichromate: **Orange $\rightarrow$ Green**; $\text{CuO}$: **Black $\rightarrow$ Brown/pink** |
| **Oxidation of Aldehyde** | Aldehyde | **Tollens' reagent**, **Fehling's solution**, or $\text{K}_2\text{Cr}_2\text{O}_7/\text{H}^+$ | **Carboxylic Acid** (or carboxylate ion in alkali) | Tollens': **Colourless $\rightarrow$ Silver mirror**; Fehling's: **Blue $\rightarrow$ Brick-red ppt** |
| **Esterification** (Condensation) | Carboxylic Acid + Alcohol | **Conc. $\text{H}_2\text{SO}_4$ catalyst**, warm in water bath | **Ester** + $\text{H}_2\text{O}$ | **Sweet/fruity smell**; oily immiscible layer on $\text{NaHCO}_3\text{(aq)}$ |
| **Ester Hydrolysis** | Ester + $\text{H}_2\text{O}$ | Dilute acid ($\text{H}^+$) or alkali ($\text{NaOH}$), heat under **reflux** | Alcohol + Carboxylic Acid (or **carboxylate salt** if $\text{NaOH}$ used) | Fruit smell disappears; alkaline hydrolysis is irreversible |
| **Saponification** (Alkaline Hydrolysis) | Fat/Oil (Triglyceride) + $3\text{NaOH}$ | Boil under **reflux** with $\text{NaOH(aq)}$ or $\text{KOH(aq)}$, then add sat. $\text{NaCl}$ | **Glycerol** (propane-1,2,3-triol) + **3 Soap molecules** ($\text{RCOO}^-\text{Na}^+$) | Soap precipitates out ("salting out") upon adding saturated $\text{NaCl}$ |
| **Peptide Formation** (Condensation) | Amino Acid + Amino Acid | Enzyme-controlled in ribosomes | **Polypeptide / Protein** + $\text{H}_2\text{O}$ | Forms **peptide (amide) link ($-\text{CONH}-$)** |
| **Protein Hydrolysis** | Protein + $\text{H}_2\text{O}$ | Conc. $\text{HCl(aq)}$, heat under **reflux** (or digestive enzymes) | Constituent **Amino Acids** | Identified by **paper/thin-layer chromatography** with ninhydrin |

---

## Part 3: Deep-Dive Reaction Guides & Structural Examples

---

### 1. Alkenes: Addition Reactions & Alcohol Dehydration

Alkenes contain the unsaturated **carbon-to-carbon double bond ($\text{C=C}$)**. In an **addition reaction**, the $\text{C=C}$ double bond breaks open into a $\text{C-C}$ single bond, allowing two new atoms or groups to attach across the carbons—converting two reactant molecules into **one saturated product molecule** (100% atom economy).

#### A. Hydration of an Unsymmetrical Alkene (Propene + Water)
When water ($\text{H-OH}$) adds across an unsymmetrical alkene like **propene**, **two structural isomers** can form depending on which carbon receives the $-\text{H}$ and which receives the $-\text{OH}$:

```text
    H   H   H                                  H   OH  H
    |   |   |        + H-OH (H3PO4 cat.)       |   |   |
H - C - C = C - H  -----------------------> H - C - C - C - H    Propan-2-ol (MAJOR product, 2° alcohol)
    |       |                                  |   |   |
    H       H                                  H   H   H

                             +

                                               H   H   H
                                               |   |   |
                                            H - C - C - C - OH   Propan-1-ol (MINOR product, 1° alcohol)
                                               |   |   |
                                               H   H   H
```
* **Exam Tip:** SQA questions frequently ask you to draw **both possible alcohols** formed when hydration occurs on but-1-ene (producing **butan-2-ol** and **butan-1-ol**) or propene.

#### B. Dehydration of Alcohols (Elimination)
The reverse of hydration is **dehydration** (an elimination reaction). Passing alcohol vapour over heated **aluminium oxide ($\text{Al}_2\text{O}_3$)** ceramic wool removes an $-\text{OH}$ group from one carbon and an $-\text{H}$ atom from an adjacent carbon to form $\text{H}_2\text{O}$ and a $\text{C=C}$ double bond.
* Dehydrating **butan-2-ol** can remove hydrogen from either Carbon-1 or Carbon-3, producing a mixture of **but-1-ene** and **but-2-ene**.

---

### 2. Alcohols, Oxidation Pathways & Carbonyl Compounds

#### A. Classifying Alcohols ($1^\circ, 2^\circ, 3^\circ$)
To classify any alcohol, locate the **carbon atom directly bonded to the $-\text{OH}$ group** (the $\alpha$-carbon) and count how many **other carbon (alkyl) groups** are attached to that specific carbon:

```text
   PRIMARY (1°) ALCOHOL              SECONDARY (2°) ALCOHOL             TERTIARY (3°) ALCOHOL
   Ethanol (or Propan-1-ol)               Propan-2-ol                    2-methylpropan-2-ol

         H   H                             H   H   H                          H  CH3  H
         |   |                             |   |   |                          |   |   |
     H - C - C - OH                    H - C - C - C - H                  H - C - C - C - H
         |   |                             |   |   |                          |   |   |
         H   H                             H   OH  H                          H   OH  H

  C-OH carbon is bonded to          C-OH carbon is bonded to           C-OH carbon is bonded to
  only 1 other carbon atom          2 other carbon atoms               3 other carbon atoms
  (Has two C-H bonds to break)      (Has one C-H bond to break)        (Has NO C-H bonds to break!)
```

#### B. Oxidation as an Increase in the $\text{O:H}$ Ratio
In organic chemistry:
* **Oxidation** is an **increase in the oxygen-to-hydrogen ($\text{O:H}$) ratio** within the organic molecule (either by losing hydrogen atoms or gaining oxygen atoms).
* **Reduction** is a **decrease in the oxygen-to-hydrogen ($\text{O:H}$) ratio** (by gaining hydrogen or losing oxygen).

Let's trace the two-step oxidation of **propan-1-ol** ($1^\circ$ alcohol) to **propanal** (aldehyde) and then to **propanoic acid** (carboxylic acid):

```text
STEP 1: Mild Oxidation of 1° Alcohol -> Aldehyde (Loss of 2H as H2O)

    H   H   H                                     H   H       O
    |   |   |         + [O] (Distillation)        |   |      //
H - C - C - C - O - H -------------------->   H - C - C - C       +  H2O
    |   |   |         (Removes 2H: one from       |   |      \
    H   H   H          -OH and one from C-H)      H   H       H

   Propan-1-ol                                     Propanal
   Formula: C3H8O                                  Formula: C3H6O
   O:H Ratio = 1:8 (0.125)                         O:H Ratio = 1:6 (0.167)  [Increased!]


STEP 2: Further Oxidation of Aldehyde -> Carboxylic Acid (Gain of 1O)

    H   H       O                                 H   H       O
    |   |      //     + [O] (Heat under Reflux)   |   |      //
H - C - C - C         -------------------->   H - C - C - C
    |   |      \      (Inserts O into C-H)        |   |      \
    H   H       H                                 H   H       O - H

   Propanal                                       Propanoic acid
   Formula: C3H6O                                 Formula: C3H6O2
   O:H Ratio = 1:6 (0.167)                        O:H Ratio = 2:6 = 1:3 (0.333) [Increased!]
```

#### C. Oxidation of a Secondary ($2^\circ$) Alcohol $\rightarrow$ Ketone
When **propan-2-ol** is heated with acidified dichromate or passed over hot black copper(II) oxide ($\text{CuO}$), two hydrogen atoms are removed (one from the $-\text{OH}$ and one attached to C2) to form **propanone** (a ketone) and water:

```text
    H   OH  H                                     H   O   H
    |   |   |              + [O]                  |  ||   |
H - C - C - C - H   ------------------>       H - C - C - C - H   +  H2O
    |   |   |                                     |       |
    H   H   H                                     H       H

   Propan-2-ol (C3H8O)                           Propanone (C3H6O)
   O:H Ratio = 1:8                               O:H Ratio = 1:6
```
* **Why Ketones Cannot Be Oxidised Further:** In a ketone, the carbonyl group ($\text{C=O}$) is bonded to two carbon atoms on either side and has **no $\text{C-H}$ bond** attached to the carbonyl carbon. Breaking a strong $\text{C-C}$ covalent bond cannot be achieved by mild oxidising agents.
* **Why Tertiary ($3^\circ$) Alcohols Resist Oxidation:** In a $3^\circ$ alcohol like 2-methylpropan-2-ol, the carbon attached to the $-\text{OH}$ group is bonded to three alkyl groups and has **no $\text{C-H}$ bond**, so $\text{C=O}$ cannot form without breaking the carbon skeleton.

#### D. Essential Oxidising Agents & Colour Changes (Must Memorise!)

| Oxidising Agent | Initial Appearance | Final Appearance (Positive Result) | Chemical Species Change | Reacts With |
| :--- | :--- | :--- | :--- | :--- |
| **Acidified Potassium Dichromate** ($\text{K}_2\text{Cr}_2\text{O}_7 / \text{H}^+$) | **Orange solution** | **Green solution** | $\text{Cr}_2\text{O}_7^{2-}\text{(aq)} \rightarrow \text{Cr}^{3+}\text{(aq)}$ (Reduction of $\text{Cr}^{\text{VI}}$ to $\text{Cr}^{\text{III}}$) | $1^\circ$ alcohols, $2^\circ$ alcohols, Aldehydes |
| **Hot Copper(II) Oxide** ($\text{CuO}$) | **Black solid** | **Brown / pink solid** | $\text{CuO(s)} \rightarrow \text{Cu(s)}$ (Reduction of $\text{Cu}^{2+}$ to $\text{Cu}^0$) | $1^\circ$ alcohols, $2^\circ$ alcohols |
| **Fehling's (or Benedict's) Solution** | **Blue solution** | **Brick-red / orange-red precipitate** | $\text{Cu}^{2+}\text{(aq)} \rightarrow \text{Cu}_2\text{O(s)}$ (Copper(I) oxide precipitate) | **Aldehydes ONLY** (Distinguishes from ketones) |
| **Tollens' Reagent** (Ammoniacal $\text{AgNO}_3$) | **Colourless solution** | **Silver mirror** on tube (or grey/black $\text{Ag}$ solid) | $\text{Ag}^+\text{(aq)} + \text{e}^- \rightarrow \text{Ag(s)}$ | **Aldehydes ONLY** (Distinguishes from ketones) |

#### E. Oxidation of Food & Antioxidants
When fats and oils in food are exposed to oxygen in the air, they undergo **oxidation**, producing volatile short-chain aldehydes, ketones, and carboxylic acids that give food a **rancid** smell and taste.
* **Antioxidants** (such as **Vitamin C / ascorbic acid**, $\text{C}_6\text{H}_8\text{O}_6$) are molecules added to foods to prevent oxidation.
* An antioxidant functions as a **reducing agent**: it is oxidised **instead of** the food molecules by donating electrons:
  $$\text{C}_6\text{H}_8\text{O}_6 \rightarrow \text{C}_6\text{H}_6\text{O}_6 + 2\text{H}^+ + 2\text{e}^-$$
  *(Notice that the $\text{O:H}$ ratio increases from $6:8$ to $6:6$, and electrons appear on the right-hand side, proving oxidation of the antioxidant!)*

---

### 3. Esters: Condensation (Esterification) & Hydrolysis

#### A. Esterification (Condensation Reaction)
An **ester** is formed when a **carboxylic acid** reacts reversibly with an **alcohol**. This is a **condensation reaction** because two molecules join to form a larger molecule with the elimination of a small molecule (**water**, $\text{H}_2\text{O}$).

```text
   Carboxylic Acid          Alcohol                       Ester Link (-COO-)          Water
   (Ethanoic acid)        (Propan-1-ol)                  (Propyl ethanoate)

     H       O                 H   H   H                   H       O       H   H   H
     |      //                 |   |   |                   |      //       |   |   |
 H - C - C         +    H - O - C - C - C - H   <===>   H - C - C       O - C - C - C - H  +  H2O
     |      \          :       |   |   |                   |      \   /    |   |   |
     H      [O - H  +  H]      H   H   H                   H        -      H   H   H
             \_________/                                   |<-- Acid ->|   |<-- Alcohol ->|
              Forms H2O                                    (ethanoate)       (propyl)
```

* **Naming Rule:**
  1. First word comes from the **alcohol** alkyl chain (`propan-1-ol` $\rightarrow$ **propyl**).
  2. Second word comes from the **carboxylic acid** (`ethanoic acid` $\rightarrow$ **ethanoate**).
  3. Combined name: **propyl ethanoate**.
* **Structural Identification Trap:** Regardless of which way around the ester is drawn on an exam paper, always find the carbonyl $\text{C=O}$ carbon first! The carbon chain attached directly to the $\text{C=O}$ carbon came from the **carboxylic acid** (`-oate`). The carbon chain attached to the single-bonded $-\text{O}-$ atom came from the **alcohol** (`-yl`).

#### B. Mandatory Laboratory Preparation of an Ester
```text
          ||  <-- Loose cotton wool plug
         |  |
         |==| <-- Wet paper towel wrapped around top of test tube
         |==|     (Acts as a CONDENSER to cool volatile vapours)
         |  |
    +------------+
    |  |      |  | <-- Hot water bath (heated with kettle/electrical heater;
    |  |~~~~~~|  |     NO naked Bunsen flame because alcohol & ester are FLAMMABLE)
    |  |Acid +|  |
    |  |Alcoh.|  | <-- Reaction mixture: Alcohol + Carboxylic Acid +
    |  |+H2SO4|  |     a few drops of conc. H2SO4 catalyst
    +------------+
```
After heating for 5–10 minutes, the mixture is poured into a beaker of **aqueous sodium hydrogencarbonate ($\text{NaHCO}_3$)**.
* **Why $\text{NaHCO}_3\text{(aq)}$?** It **neutralises** the unreacted carboxylic acid and the sulfuric acid catalyst (producing $\text{CO}_2$ fizzing).
* **Two observations confirming an ester has formed:**
  1. A distinct **sweet / fruity smell**.
  2. An **immiscible oily layer** floating on the surface of the water (esters are non-polar enough that they are insoluble in water).

#### C. Hydrolysis of Esters (Acid vs Alkaline)
**Hydrolysis** is the exact reverse of condensation: a large molecule is split into smaller molecules by reaction with **water** ($\text{H}_2\text{O}$).
* **Acid-Catalysed Hydrolysis** (dilute $\text{HCl}$ or $\text{H}_2\text{SO}_4$ under reflux):
  $$\text{Ester} + \text{Water} \rightleftharpoons \text{Carboxylic Acid} + \text{Alcohol}$$
  *Reversible reaction—reaches equilibrium, so yield is less than 100%.*
* **Alkaline Hydrolysis** (heating under reflux with $\text{NaOH(aq)}$ or $\text{KOH(aq)}$):
  $$\text{Propyl ethanoate} + \text{NaOH(aq)} \rightarrow \text{Sodium ethanoate (salt)} + \text{Propan-1-ol}$$
  *Non-reversible (goes to completion)—because the carboxylic acid is immediately neutralised by $\text{OH}^-$ ions to form a stable **carboxylate salt** ($\text{CH}_3\text{COO}^-\text{Na}^+$).*

---

### 4. Fats, Oils, Soaps, Detergents & Emulsifiers

#### A. Fats and Oils as Triesters (Triglycerides)
Edible fats and oils are naturally occurring **esters** formed by the condensation of **one molecule of glycerol** (systematic name: **propane-1,2,3-triol**) with **three fatty acid molecules** (long-chain carboxylic acids, typically $\text{C}_{16}$ to $\text{C}_{18}$):

```text
   Glycerol               3 Fatty Acids                 Fat or Oil (Triglyceride)          Water
(Propane-1,2,3-triol)                                  (Triester: 3 ester links)

    H                       O                               H       O
    |                      //                               |      //
H - C - O - H      +   HO - C - R1                      H - C - O - C - R1
    |                       O                               |       O
H - C - O - H      +   HO - C - R2       <=======>      H - C - O - C - R2          +     3 H2O
    |                      //                               |      //
H - C - O - H      +   HO - C - R3                      H - C - O - C - R3
    |                      \\                               |      \\
    H                       O                               H       O

(1 mole of glycerol) + (3 moles of fatty acid)  <===>  (1 mole of fat/oil) + (3 moles of water)
```
* **Stoichiometric Ratio (Frequently Tested!):** Hydrolysing **1 mole** of a fat or oil requires **3 moles of water** and produces **1 mole of glycerol** and **3 moles of fatty acids**.

#### B. Why Are Fats Solid and Oils Liquid at Room Temperature?
This is one of the most common 3-mark SQA explanation questions. Always include these four linked points:
1. **Unsaturation:** Oils have a **higher degree of unsaturation** (more $\text{C=C}$ double bonds in their fatty acid chains) than fats, which are mostly **saturated** ($\text{C-C}$ single bonds).
2. **Molecular Shape & Packing:** The $\text{C=C}$ double bonds in oils introduce **bends/kinks** into the hydrocarbon chains, preventing the molecules from **packing closely together** (whereas saturated fat chains are straight/linear and pack tightly).
3. **Intermolecular Forces:** Because oil molecules cannot pack closely, the **London dispersion forces (LDFs)** between oil molecules are **weaker** than those between fat molecules.
4. **Energy / Melting Point:** Less thermal energy is required to overcome the weaker London dispersion forces in oils, giving oils a **lower melting point** than fats.

#### C. Soaps & Saponification (Alkaline Hydrolysis of Fats/Oils)
**Soaps** are produced by the **alkaline hydrolysis** of edible fats and oils using sodium hydroxide ($\text{NaOH}$) or potassium hydroxide ($\text{KOH}$):
$$\text{Fat/Oil (Triglyceride)} + 3\text{NaOH} \rightarrow \text{Glycerol} + 3\text{Sodium Salts of Fatty Acids (SOAP)}$$

```text
STRUCTURE OF A SOAP ION (e.g., Stearate ion, C17H35COO-):

                                                   O
    /\  /\  /\  /\  /\  /\  /\  /\  /\            //
   /  \/  \/  \/  \/  \/  \/  \/  \/  \ — C  (Na+)
                                                  \
                                                   O(-)
  |<------- HYDROPHOBIC TAIL ---------->| |<- HYDROPHILIC HEAD ->|
   Long non-polar hydrocarbon chain        Ionic carboxylate group (-COO-)
   • Insoluble in water                    • Soluble in polar water
   • Dissolves in non-polar oil/grease     • Forms ion-dipole attractions with H2O
```

* **How Soap Cleans (Micelle Formation):**
  1. The **non-polar hydrophobic tails** dissolve into the non-polar grease/oil droplet.
  2. The **negatively charged ionic hydrophilic heads ($-\text{COO}^-$)** remain on the outside, interacting with the surrounding polar water molecules.
  3. With agitation, the grease is lifted off the surface into spherical **micelles**. Because the outside of every micelle is negatively charged, the micelles **repel each other** and do not coalesce, keeping the grease suspended in water as an **emulsion** that can be rinsed away.
* **Hard Water & Soapless Detergents:**
  * **Hard water** contains dissolved calcium ($\text{Ca}^{2+}$) and magnesium ($\text{Mg}^{2+}$) ions. Soap reacts with these ions to form an insoluble precipitate called **scum** (calcium stearate).
  * **Soapless detergents** have a similar hydrophobic tail and ionic head (e.g. sulfonate $-\text{SO}_3^-$), but their calcium and magnesium salts are **soluble**, so they **do not form scum** in hard water.

#### D. Emulsifiers in Food
An **emulsion** is a mixture of small droplets of one liquid dispersed throughout another immiscible liquid (e.g. oil and water in milk, mayonnaise, or ice cream).
* **How Food Emulsifiers Are Made:** Reacting edible oils with glycerol so that only **one or two** hydroxyl groups are esterified, producing **monoglycerides** or **diglycerides**.
* **Structure of an Emulsifier:**
  * **Hydrophilic head:** The unreacted **hydroxyl ($-\text{OH}$) groups** attached to the glycerol backbone (polar; form hydrogen bonds with water).
  * **Hydrophobic tail:** The one or two **non-polar fatty acid hydrocarbon chains** (dissolve in the oil phase).

---

### 5. Proteins & Amino Acids: Condensation, Hydrolysis & Denaturation

#### A. Amino Acids & Peptide Link Formation
**Proteins** are natural condensation polymers made of monomers called **amino acids**. Every $\alpha$-amino acid contains two functional groups attached to the same central carbon atom:
1. An **amino group ($-\text{NH}_2$)**
2. A **carboxyl group ($-\text{COOH}$)**

When amino acids join during protein synthesis, the $-\text{COOH}$ group of one amino acid reacts with the $-\text{NH}_2$ group of another in a **condensation reaction**, eliminating **water ($\text{H}_2\text{O}$)** and forming a **peptide (amide) link ($-\text{CONH}-$)**:

```text
    Amino Acid 1                Amino Acid 2                     Dipeptide (showing Peptide Link)
     (Glycine)                   (Alanine)

    H   H       O               H   CH3     O                   H   H       O   H   CH3     O
    |   |      //               |   |      //                   |   |      ||   |   |      //
    N - C - C         +     H - N - C - C           <===>       N - C - C - N - C - C           +  H2O
    |   |      \            :   |   |      \                    |   |   |       |   |      \
    H   H      [O - H   +   H]  H   H       O - H               H   H   |<----->|   H       O - H
                \___________/                                            PEPTIDE
                  Forms H2O                                            (AMIDE) LINK
                                                                         (-CONH-)
```

#### B. Hydrolysis of Proteins
During digestion (or by heating a protein under reflux with concentrated acid in the lab), **water ($\text{H}_2\text{O}$)** splits the $-\text{CONH}-$ peptide links via **hydrolysis**, regenerating the individual **amino acids** ($-\text{COOH}$ and $-\text{NH}_2$ groups).
* The resulting mixture of amino acids can be separated and identified against known standards using **chromatography**.

#### C. Protein Denaturation (Heat & pH)
* Proteins fold into complex, specific 3D shapes (coils, spirals, sheets) held together by intermolecular forces between side chains—principally **hydrogen bonds** (and London dispersion forces / ionic interactions).
* When a protein is **heated** or exposed to **extremes of pH**:
  1. These weak intermolecular **hydrogen bonds** are disrupted/broken.
  2. The protein chains **unfold / uncoil**, irreversibly changing the protein's 3D shape (**denaturing**).
  3. In **enzymes** (biological catalysts made of protein), denaturing alters the shape of the **active site** so the substrate no longer fits, causing enzyme activity to drop to zero.
  4. In foods, denaturing changes the **texture and appearance** (e.g., liquid clear egg white becoming solid white when cooked).

---

### 6. Terpenes & Essential Oils

* **Terpenes** are key components of **essential oils** (concentrated extracts of volatile, non-water-soluble aroma compounds from plants, extracted by **steam distillation**).
* **Building Block:** All terpenes are unsaturated hydrocarbons formed by joining together units of **isoprene** (systematic name: **2-methylbuta-1,3-diene**, molecular formula $\text{C}_5\text{H}_8$).

```text
         ISOPRENE UNIT
    (2-methylbuta-1,3-diene)
         Formula: C5H8

             CH3
              |
    H2C = C - C = CH2
              |
              H
```

* **Calculating the Number of Isoprene Units:**
  Since one isoprene unit contains **5 carbon atoms** ($\text{C}_5\text{H}_8$), divide the total number of carbons in the terpene by 5:
  * **Limonene / Myrcene / Menthol** ($\text{C}_{10}$ skeleton) $\rightarrow \frac{10}{5} = \mathbf{2\text{ isoprene units}}$ (monoterpene).
  * **Farnesene / Selinene** ($\text{C}_{15}$ skeleton) $\rightarrow \frac{15}{5} = \mathbf{3\text{ isoprene units}}$ (sesquiterpene).
  * **$\beta$-Carotene** ($\text{C}_{40}\text{H}_{56}$) $\rightarrow \frac{40}{5} = \mathbf{8\text{ isoprene units}}$.
  * **Squalene** ($\text{C}_{30}\text{H}_{50}$) $\rightarrow \frac{30}{5} = \mathbf{6\text{ isoprene units}}$.
* **Oxidation of Terpenes:** Terpenes can be **oxidised** inside plants (or upon exposure to air/light) to form **terpenoids**—derivatives containing oxygen functional groups (alcohols, aldehydes, ketones, esters) that give spices and herbs their characteristic aromas (e.g., **menthol** [$2^\circ$ alcohol in peppermint] oxidises to **menthone** [ketone]). If essential oils are left exposed to light and air in clear bottles, unwanted oxidation alters their fragrance, which is why they are stored in **dark brown glass bottles**.

---

## Part 4: 24 Active-Recall Flashcards

*(In Markdown previewers or GitHub, click any question below to flip the card and reveal the answer!)*

<details>
<summary><strong>Flashcard 1:</strong> How do you distinguish structurally between a primary (1°), secondary (2°), and tertiary (3°) alcohol?</summary>

**Answer:**
Look at the carbon atom directly bonded to the $-\text{OH}$ functional group:
- **Primary ($1^\circ$):** Attached to **1** (or 0) other carbon atoms (e.g. propan-1-ol).
- **Secondary ($2^\circ$):** Attached to **2** other carbon atoms (e.g. propan-2-ol).
- **Tertiary ($3^\circ$):** Attached to **3** other carbon atoms (e.g. 2-methylpropan-2-ol).
</details>

<details>
<summary><strong>Flashcard 2:</strong> Define oxidation and reduction in the context of organic carbon compounds.</summary>

**Answer:**
- **Oxidation:** An **increase in the oxygen-to-hydrogen ($\text{O:H}$) ratio** (gaining oxygen atoms or losing hydrogen atoms).
- **Reduction:** A **decrease in the oxygen-to-hydrogen ($\text{O:H}$) ratio** (losing oxygen atoms or gaining hydrogen atoms).
</details>

<details>
<summary><strong>Flashcard 3:</strong> What are the products when a primary (1°), secondary (2°), and tertiary (3°) alcohol are treated with a mild oxidising agent?</summary>

**Answer:**
- **Primary ($1^\circ$) alcohol:** Oxidised first to an **aldehyde**, and on further oxidation to a **carboxylic acid**.
- **Secondary ($2^\circ$) alcohol:** Oxidised to a **ketone** (cannot be oxidised further).
- **Tertiary ($3^\circ$) alcohol:** **No reaction** (does not undergo mild oxidation).
</details>

<details>
<summary><strong>Flashcard 4:</strong> State the colour changes observed when a primary or secondary alcohol is oxidised by (a) acidified potassium dichromate and (b) hot copper(II) oxide.</summary>

**Answer:**
- **(a) Acidified potassium dichromate ($\text{K}_2\text{Cr}_2\text{O}_7/\text{H}^+$):** Turns from **orange to green** ($\text{Cr}_2\text{O}_7^{2-} \rightarrow \text{Cr}^{3+}$).
- **(b) Hot copper(II) oxide ($\text{CuO}$):** Turns from a **black solid to a brown/pink solid** ($\text{CuO} \rightarrow \text{Cu}$).
</details>

<details>
<summary><strong>Flashcard 5:</strong> State two chemical reagents that can distinguish an aldehyde from a ketone, and give the positive observation for each.</summary>

**Answer:**
1. **Fehling's (or Benedict's) solution:** Changes from a **blue solution to a brick-red / orange-red precipitate** ($\text{Cu}^{2+} \rightarrow \text{Cu}_2\text{O}$) with an aldehyde. Ketones show no change.
2. **Tollens' reagent:** Changes from a **colourless solution to a silver mirror** ($\text{Ag}^+ \rightarrow \text{Ag(s)}$) with an aldehyde. Ketones show no change.
*(Acidified dichromate also turns orange to green with an aldehyde and stays orange with a ketone).*
</details>

<details>
<summary><strong>Flashcard 6:</strong> Why do tertiary alcohols and ketones resist oxidation by acidified dichromate?</summary>

**Answer:**
Neither molecule has a **hydrogen atom directly bonded to the carbon bearing the functional group** ($\text{C-OH}$ or $\text{C=O}$). Oxidising them would require breaking a strong carbon-to-carbon ($\text{C-C}$) covalent bond, which mild oxidising agents cannot do.
</details>

<details>
<summary><strong>Flashcard 7:</strong> What are the two organic products formed when propene reacts with steam ($\text{H}_2\text{O}$) in the presence of an acid catalyst, and which is the major product?</summary>

**Answer:**
- **Propan-2-ol** (major product, secondary alcohol)
- **Propan-1-ol** (minor product, primary alcohol)
This is a **hydration (addition)** reaction.
</details>

<details>
<summary><strong>Flashcard 8:</strong> How are antioxidants used in food chemistry, and how do they act in terms of redox?</summary>

**Answer:**
Antioxidants (e.g. Vitamin C / ascorbic acid) are added to food to prevent the **oxidation of fats and oils** (which causes rancidity). They act as **reducing agents** by easily undergoing **oxidation themselves** (losing electrons) in preference to the food molecules.
</details>

<details>
<summary><strong>Flashcard 9:</strong> Name the ester formed from butan-1-ol and propanoic acid, and name the type of reaction.</summary>

**Answer:**
- **Ester name:** **Butyl propanoate** (`butyl` from butan-1-ol; `propanoate` from propanoic acid).
- **Reaction type:** **Condensation** (or esterification), eliminating $\text{H}_2\text{O}$.
</details>

<details>
<summary><strong>Flashcard 10:</strong> An ester has the shortened structural formula $\text{CH}_3\text{CH}_2\text{COOCH}_3$. Name this ester and identify the parent alcohol and parent carboxylic acid.</summary>

**Answer:**
- **Name:** **Methyl propanoate**
- **Parent carboxylic acid:** **Propanoic acid** ($\text{CH}_3\text{CH}_2\text{COOH}$, containing the 3 carbons including $\text{C=O}$)
- **Parent alcohol:** **Methanol** ($\text{CH}_3\text{OH}$, attached to the single-bonded $-\text{O}-$)
</details>

<details>
<summary><strong>Flashcard 11:</strong> In the laboratory preparation of an ester, state the role of: (a) concentrated $\text{H}_2\text{SO}_4$, (b) the wet paper towel wrapped around the tube, (c) heating in a water bath rather than a Bunsen flame, and (d) pouring into $\text{NaHCO}_3\text{(aq)}$.</summary>

**Answer:**
- **(a) Conc. $\text{H}_2\text{SO}_4$:** Provides $\text{H}^+$ ions to act as a **catalyst** (and absorbs water to shift equilibrium towards the ester).
- **(b) Wet paper towel:** Acts as a **condenser**, cooling volatile reactant and product vapours so they drip back into the tube.
- **(c) Water bath:** Alcohols and esters are highly **flammable**, so a naked flame is unsafe.
- **(d) $\text{NaHCO}_3\text{(aq)}$:** **Neutralises** the unreacted carboxylic acid and sulfuric acid catalyst so the fruity smell of the ester can be detected clearly.
</details>

<details>
<summary><strong>Flashcard 12:</strong> Why does alkaline hydrolysis of an ester give a higher yield than acid-catalysed hydrolysis?</summary>

**Answer:**
Acid hydrolysis is **reversible** ($\text{Ester} + \text{H}_2\text{O} \rightleftharpoons \text{Acid} + \text{Alcohol}$). Alkaline hydrolysis using $\text{NaOH}$ is **non-reversible (goes to completion)** because the carboxylic acid reacts immediately with $\text{OH}^-$ ions to form a stable **carboxylate salt** (e.g. sodium ethanoate), removing the acid from the equilibrium.
</details>

<details>
<summary><strong>Flashcard 13:</strong> What is the systematic name and structure of glycerol, and what are fats and oils chemically?</summary>

**Answer:**
- **Glycerol systematic name:** **Propane-1,2,3-triol** ($\text{HOCH}_2\text{CH(OH)CH}_2\text{OH}$, a trihydric alcohol with 3 $-\text{OH}$ groups).
- **Fats and oils:** Naturally occurring **triesters (triglycerides)** formed by the condensation of **1 molecule of glycerol** with **3 fatty acid molecules**.
</details>

<details>
<summary><strong>Flashcard 14:</strong> Explain fully why vegetable oils have lower melting points than animal fats (3 marks).</summary>

**Answer:**
1. Oils have a **higher degree of unsaturation** (more $\text{C=C}$ double bonds) than fats.
2. The $\text{C=C}$ double bonds create **bends/kinks** in the hydrocarbon chains, preventing the oil molecules from **packing closely together**.
3. This results in **weaker London dispersion forces** between oil molecules compared to closely packed saturated fat molecules, so less energy is required to melt them.
</details>

<details>
<summary><strong>Flashcard 15:</strong> How are unsaturated vegetable oils converted into solid/spreadable fats ("hardened"), and what catalyst is used?</summary>

**Answer:**
By **hydrogenation** (an **addition** reaction with hydrogen gas, $\text{H}_2$) using a finely divided **nickel ($\text{Ni}$) catalyst**. This converts some $\text{C=C}$ double bonds into $\text{C-C}$ single bonds, allowing chains to pack more closely and raising the melting point.
</details>

<details>
<summary><strong>Flashcard 16:</strong> How are soaps manufactured from fats and oils, and what are the two products formed?</summary>

**Answer:**
By **alkaline hydrolysis** (saponification)—heating the fat or oil under reflux with **sodium hydroxide ($\text{NaOH}$)** or potassium hydroxide ($\text{KOH}$).
The products are:
1. **Glycerol** (propane-1,2,3-triol)
2. **Soaps** (sodium or potassium salts of long-chain fatty acids, e.g. $\text{C}_{17}\text{H}_{35}\text{COO}^-\text{Na}^+$).
</details>

<details>
<summary><strong>Flashcard 17:</strong> Describe the structure of a soap ion and explain how it removes non-polar grease using water.</summary>

**Answer:**
- **Structure:** A long, non-polar covalent hydrocarbon chain (**hydrophobic tail**) and an ionic negatively charged $-\text{COO}^-$ carboxylate group (**hydrophilic head**).
- **Action:** The hydrophobic tails dissolve into the non-polar grease droplet, while the negatively charged hydrophilic heads remain on the outside in the polar water. Agitation forms spherical **micelles** that repel each other due to their negative surface charges, suspending the grease in water as an **emulsion**.
</details>

<details>
<summary><strong>Flashcard 18:</strong> Why are soapless detergents used instead of soap in hard water areas?</summary>

**Answer:**
Hard water contains dissolved $\text{Ca}^{2+}$ and $\text{Mg}^{2+}$ ions. Soap reacts with these ions to form an insoluble precipitate called **scum**, wasting soap. **Soapless detergents** form **soluble** calcium and magnesium salts, so they do not form scum.
</details>

<details>
<summary><strong>Flashcard 19:</strong> How are food emulsifiers made, and what makes them effective at stabilising oil-and-water mixtures?</summary>

**Answer:**
Emulsifiers are made by reacting **edible oils with glycerol** to form molecules with only **one or two fatty acid groups** attached to the glycerol backbone (monoglycerides or diglycerides).
- The **unreacted hydroxyl ($-\text{OH}$) groups** on the glycerol form the polar **hydrophilic head** (dissolves in water).
- The **fatty acid hydrocarbon chains** form the non-polar **hydrophobic tail** (dissolves in oil).
</details>

<details>
<summary><strong>Flashcard 20:</strong> Name the two functional groups present in all amino acids and draw the functional group formed when two amino acids condense.</summary>

**Answer:**
- Amino acids contain an **amino group ($-\text{NH}_2$)** and a **carboxyl group ($-\text{COOH}$)**.
- When they condense (eliminating $\text{H}_2\text{O}$), they form a **peptide (amide) link**: $-\text{C(=O)-NH}-$.
</details>

<details>
<summary><strong>Flashcard 21:</strong> What happens to a protein during (a) hydrolysis and (b) denaturation?</summary>

**Answer:**
- **(a) Hydrolysis:** Strong covalent **peptide links ($-\text{CONH}-$)** are broken by reaction with water ($\text{H}_2\text{O}$), breaking the protein polymer back down into its constituent **amino acids**.
- **(b) Denaturation:** Heating or changing pH breaks weak intermolecular **hydrogen bonds** (and LDFs), causing the protein's 3D coiled shape to unfold irreversibly (changing texture/appearance and destroying enzyme active site shape).
</details>

<details>
<summary><strong>Flashcard 22:</strong> What is the systematic name and molecular formula of an isoprene unit?</summary>

**Answer:**
- **Systematic name:** **2-methylbuta-1,3-diene**
- **Molecular formula:** $\text{C}_5\text{H}_8$
</details>

<details>
<summary><strong>Flashcard 23:</strong> Absinthin is a terpene derivative with a carbon skeleton of 30 carbon atoms. How many isoprene units were joined to form this skeleton?</summary>

**Answer:**
Each isoprene unit ($\text{C}_5\text{H}_8$) contains **5 carbon atoms**.
$$\text{Number of isoprene units} = \frac{30}{5} = \mathbf{6\text{ isoprene units}}$$
</details>

<details>
<summary><strong>Flashcard 24:</strong> Why are essential oils stored in dark brown glass bottles with tight lids?</summary>

**Answer:**
Essential oils contain unsaturated **terpenes** and **aldehydes/alcohols** that are easily **oxidised** by oxygen in the air (accelerated by UV light). Storing them in dark, airtight bottles prevents unwanted oxidation that would alter their aroma and chemical composition.
</details>

---

## Part 5: Practice Questions & SQA Exam Training

### Section A: Multiple Choice Questions (Paper 1 Style)

**Q1.** Which of the following alcohols cannot be oxidised by acidified potassium dichromate solution?
- A. Butan-1-ol
- B. Butan-2-ol
- C. 2-methylpropan-1-ol
- D. 2-methylpropan-2-ol

**Q2.** Which pair of compounds are structural isomers of each other?
- A. Butanal and Butan-2-ol
- B. Propanoic acid and Methyl ethanoate
- C. Pentan-2-one and Pentanoic acid
- D. Propan-1-ol and Propanone

**Q3.** In the conversion of ethanal ($\text{CH}_3\text{CHO}$) to ethanol ($\text{CH}_3\text{CH}_2\text{OH}$), what happens to the oxygen-to-hydrogen ($\text{O:H}$) ratio and what type of reaction is occurring?
- A. $\text{O:H}$ ratio increases from $1:4$ to $1:6$; oxidation
- B. $\text{O:H}$ ratio decreases from $1:4$ to $1:6$; reduction
- C. $\text{O:H}$ ratio increases from $1:6$ to $1:4$; oxidation
- D. $\text{O:H}$ ratio decreases from $1:6$ to $1:4$; reduction

**Q4.** Complete hydrolysis of $1\text{ mol}$ of a triglyceride (fat) molecule using sodium hydroxide solution produces:
- A. $1\text{ mol}$ of glycerol and $1\text{ mol}$ of soap
- B. $3\text{ mol}$ of glycerol and $1\text{ mol}$ of soap
- C. $1\text{ mol}$ of glycerol and $3\text{ mol}$ of soap
- D. $3\text{ mol}$ of glycerol and $3\text{ mol}$ of soap

**Q5.** Squalene is a linear terpene with the molecular formula $\text{C}_{30}\text{H}_{50}$. How many isoprene units make up a molecule of squalene, and how many moles of bromine ($\text{Br}_2$) are required to completely saturate $1\text{ mol}$ of squalene (which contains 6 $\text{C=C}$ double bonds)?
- A. 5 isoprene units; $5\text{ mol Br}_2$
- B. 6 isoprene units; $6\text{ mol Br}_2$
- C. 6 isoprene units; $12\text{ mol Br}_2$
- D. 10 isoprene units; $6\text{ mol Br}_2$

**Q6.** When a protein is heated to $80^\circ\text{C}$, it denatures. Which bonds or interactions are primarily disrupted during this process?
- A. Covalent peptide links ($-\text{CONH}-$) along the backbone
- B. Carbon-to-carbon covalent bonds in the amino acids
- C. Hydrogen bonds between side chains holding the 3D shape
- D. Ester links between glycerol and fatty acids

---

### Section B: Reaction Pathway & Structural Identification (Paper 2 Style)

**Q7.** Consider the following three-step reaction sequence starting from **but-1-ene**:

$$\text{But-1-ene} \xrightarrow[\text{H}_3\text{PO}_4\text{ catalyst}]{\text{Step 1: } +\text{H}_2\text{O}} \text{Alcohol X (major)} + \text{Alcohol Y (minor)}$$
$$\text{Alcohol X} \xrightarrow[\text{Hot CuO}]{\text{Step 2}} \text{Compound Z}$$
$$\text{Alcohol Y} \xrightarrow[\text{Excess }\text{Cr}_2\text{O}_7^{2-}/\text{H}^+]{\text{Step 3 (Reflux)}} \text{Compound W}$$

1. Name **Alcohol X** and **Alcohol Y**, and state the classification ($1^\circ, 2^\circ,$ or $3^\circ$) of each. *(2 marks)*
2. Name **Compound Z** and **Compound W**. *(2 marks)*
3. State what would be observed when **Compound Z** is warmed with Tollens' reagent. *(1 mark)*
4. Draw the full structural formula and give the systematic name of the organic product formed if **Alcohol X** reacts with **Compound W** in the presence of concentrated sulfuric acid. *(2 marks)*

**Q8.** A flavouring chemist analyses an ester found in bananas with the shortened structural formula:
$$\text{CH}_3\text{COOCH}_2\text{CH}_2\text{CH(CH}_3)_2$$
1. Name the functional group $-\text{COO}-$ present in this molecule. *(1 mark)*
2. Draw the shortened structural formula and state the systematic name of the **carboxylic acid** and the **alcohol** formed when this ester undergoes acid-catalysed hydrolysis. *(2 marks)*

**Q9.** Below is a section of a tripeptide chain found in silk:
$$\cdots -\text{NH}-\text{CH(CH}_3)-\text{CO}-\text{NH}-\text{CH}_2-\text{CO}-\text{NH}-\text{CH(CH}_2\text{OH)}-\text{CO}-\cdots$$
1. Name the type of reaction that breaks this protein down into amino acids during digestion. *(1 mark)*
2. Draw the full structural formulae of the **three different amino acids** produced when this section of protein is completely broken down. *(3 marks)*

---

### Section C: SQA 3-Mark Open-Ended Questions

**Q10. (3 Marks — Open-Ended)**
*A student finds three unlabelled bottles in a prep room. Each bottle contains a colourless liquid with the molecular formula $\text{C}_3\text{H}_6\text{O}$. The three liquids are known to be **propanal**, **propanone**, and **prop-2-en-1-ol** ($\text{CH}_2=\text{CHCH}_2\text{OH}$).*
*Using your knowledge of chemistry, comment on how the student could use chemical tests and structural properties to positively identify all three liquids.*

**Q11. (3 Marks — Open-Ended)**
*Butter, olive oil, and dishwashing liquid all interact differently with water and heat.*
*Using your knowledge of chemistry, explain the relationship between the chemical structures of fats, oils, and soaps/detergents and their physical properties and everyday uses.*

---

### Answers & Marking Schemes

<details>
<summary><strong>Click to reveal full answers and SQA marking instructions</strong></summary>

#### Section A: Multiple Choice Answers
1. **D (2-methylpropan-2-ol)** — It is a tertiary ($3^\circ$) alcohol; A and C are primary ($1^\circ$) alcohols and B is a secondary ($2^\circ$) alcohol.
2. **B (Propanoic acid and Methyl ethanoate)** — Both have the molecular formula $\text{C}_3\text{H}_6\text{O}_2$.
3. **B ($\text{O:H}$ ratio decreases from $1:4$ to $1:6$; reduction)** — Ethanal is $\text{C}_2\text{H}_4\text{O}$ ($\text{O:H} = 1:4$) and ethanol is $\text{C}_2\text{H}_6\text{O}$ ($\text{O:H} = 1:6$). Since $\frac{1}{6} < \frac{1}{4}$, the $\text{O:H}$ ratio decreases, which is reduction.
4. **C ($1\text{ mol}$ of glycerol and $3\text{ mol}$ of soap)** — A triglyceride has 1 glycerol backbone esterified to 3 fatty acid chains.
5. **B (6 isoprene units; $6\text{ mol Br}_2$)** — $\frac{30\text{ carbons}}{5} = 6$ isoprene units; each $\text{C=C}$ double bond reacts with $1\text{ mol Br}_2$ in an addition reaction.
6. **C (Hydrogen bonds between side chains holding the 3D shape)** — Denaturation breaks intermolecular hydrogen bonds, not covalent peptide links (which require hydrolysis).

---

#### Section B: Reaction Pathway & Structural Identification Answers
**Q7.**
1. **Alcohol X:** Butan-2-ol (**secondary / $2^\circ$ alcohol**); **Alcohol Y:** Butan-1-ol (**primary / $1^\circ$ alcohol**). *(2 marks)*
2. **Compound Z:** Butanone (ketone); **Compound W:** Butanoic acid (carboxylic acid). *(2 marks)*
3. **Observation:** **No change / remains colourless** (since Compound Z is a ketone and cannot be oxidised by Tollens' reagent). *(1 mark)*
4. **Ester name:** **1-methylpropyl butanoate** (or **sec-butyl butanoate**); structure shows the $\text{CH}_3\text{CH}_2\text{CH}_2\text{C(=O)-}$ group bonded to $-\text{O}-\text{CH(CH}_3)\text{CH}_2\text{CH}_3$. *(2 marks)*

**Q8.**
1. **Ester link** (or ester group / carboxylate group). *(1 mark)*
2. **Carboxylic acid:** **Ethanoic acid** ($\text{CH}_3\text{COOH}$); **Alcohol:** **3-methylbutan-1-ol** ($\text{HOCH}_2\text{CH}_2\text{CH(CH}_3)_2$). *(2 marks)*

**Q9.**
1. **Hydrolysis** *(1 mark)*
2. Breaking each $-\text{CO}-\text{NH}-$ bond and adding $-\text{OH}$ to the $-\text{CO}-$ and $-\text{H}$ to the $-\text{NH}-$:
   - Amino acid 1: $\text{H}_2\text{N}-\text{CH(CH}_3)-\text{COOH}$ (Alanine)
   - Amino acid 2: $\text{H}_2\text{N}-\text{CH}_2-\text{COOH}$ (Glycine)
   - Amino acid 3: $\text{H}_2\text{N}-\text{CH(CH}_2\text{OH)}-\text{COOH}$ (Serine) *(3 marks)*

---

#### Section C: Open-Ended Marking Guidance (0–3 Marks)
**Q10 Model Answer (3 Marks):**
- **Functional Groups:** Propanal contains an **aldehyde ($-\text{CHO}$)** carbonyl group; propanone contains a **ketone ($-\text{CO}-$)** carbonyl group; prop-2-en-1-ol contains both a **carbon-to-carbon double bond ($\text{C=C}$)** and a **primary hydroxyl ($-\text{OH}$)** group.
- **Step 1 (Test for Unsaturation):** Add **bromine solution ($\text{Br}_2\text{(aq)}$)** to samples of all three liquids. Only **prop-2-en-1-ol** is unsaturated ($\text{C=C}$), so it will rapidly **decolourise the orange/brown bromine solution** via an addition reaction.
- **Step 2 (Distinguish Aldehyde vs Ketone):** Warm the remaining two liquids in a water bath with **Tollens' reagent** or **Fehling's solution**. **Propanal** (the aldehyde) will be oxidised to propanoic acid, producing a **silver mirror** with Tollens' (or a **brick-red precipitate** with Fehling's). **Propanone** (the ketone) resists oxidation and gives **no colour change**.

**Q11 Model Answer (3 Marks):**
- **Structure of Fats & Oils:** Both butter (fat) and olive oil (oil) are **triesters (triglycerides)** made from **glycerol (propane-1,2,3-triol)** and **three fatty acid chains**.
- **Melting Points & Unsaturation:** Olive oil has a higher degree of **unsaturation** ($\text{C=C}$ double bonds), causing kinks in the hydrocarbon chains that prevent close packing. This leads to weaker **London dispersion forces** and a lower melting point (liquid at room temperature) compared to saturated butter fat, which packs closely and has stronger LDFs (solid at room temperature). Both are non-polar and immiscible with water.
- **Soaps & Detergents:** Alkaline hydrolysis of fats/oils produces **soap** (sodium salts of fatty acids). Soaps and dishwashing detergents have a **long non-polar hydrophobic hydrocarbon tail** (which dissolves in non-polar fat/oil) and an **ionic hydrophilic head** (which dissolves in polar water). Agitation forms negatively charged **micelles** that suspend grease droplets in water as a stable **emulsion**. Dishwashing detergents use soapless detergent molecules so they do not form insoluble **scum** with $\text{Ca}^{2+}/\text{Mg}^{2+}$ ions in hard water.
</details>

---

## Part 6: Curated Videos & Further Study Resources

### Video Tutorials (SQA Higher Chemistry Specific)
1. **[Miss Adams Chemistry — SQA Higher Unit 2 (Nature's Chemistry) Playlist](https://www.youtube.com/@MissAdamsChemistry)**
   - Concise, bite-sized videos covering systematic naming, oxidation of alcohols, aldehydes vs ketones, esters, fats & oils, soaps, proteins, and terpenes specifically tailored to SQA marking schemes.
2. **[BBC Bitesize — Higher Chemistry: Nature's Chemistry](https://www.bbc.co.uk/bitesize/topics/z2x6fg8)**
   - Interactive topic summaries, animations, and self-test quizzes on Esters, Fats & Oils, Proteins, Oxidation of Food, Soaps, and Fragrances.
3. **[Royal Society of Chemistry (RSC) — Practical Chemistry Videos](https://edu.rsc.org/resources/practical)**
   - Laboratory demonstrations of the oxidation of alcohols, Tollens' silver mirror test, Fehling's test, and microscale esterification.

### Reference & Past Paper Portals
4. **[SQA Past Papers & Marking Instructions (Higher Chemistry)](https://www.sqa.org.uk/pastpapers/findpastpaper.htm?subject=Chemistry&level=NH)**
   - Official SQA past examination papers and detailed marking instructions.
5. **[Chemguide — Organic Chemistry Functional Groups](https://www.chemguide.co.uk/orgmenu.html)**
   - Clear theoretical explanations of alcohol oxidation, esterification, and hydrolysis for deeper conceptual clarity.
6. **[MolView — Interactive 2D-to-3D Structural Formula Builder](https://molview.org/)**
   - Draw any alkene, alcohol, aldehyde, ketone, ester, or terpene in 2D and inspect its 3D molecular geometry and polarity.
