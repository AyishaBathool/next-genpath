// data/diseases.ts
export const diseases = [
    {
      name: 'Cystic Fibrosis',
      slug: 'cystic-fibrosis',
      summary: 'Cystic fibrosis is a hereditary disorder that primarily affects the lungs and digestive system. The disease causes the body to produce thick and sticky mucus that can obstruct the airways, leading to breathing difficulties and frequent lung infections. It also affects the pancreas, preventing enzymes from reaching the intestines to help break down food, causing malnutrition.',
      causes: 'Cystic fibrosis is caused by mutations in the CFTR gene. This gene provides instructions for making a protein that helps regulate the movement of salt and water in and out of cells. When the gene is mutated, it results in the production of a faulty protein that causes thick mucus buildup in the lungs and other organs.',
      symptoms: [
        'Persistent cough with thick mucus',
        'Frequent lung infections and pneumonia',
        'Shortness of breath and wheezing',
        'Poor growth despite normal appetite',
        'Salty-tasting skin',
        'Infertility in men (due to blocked vas deferens)'
      ],
      treatment: [
        'Daily airway clearance techniques (chest physical therapy)',
        'Inhaled medicines to help thin mucus and reduce inflammation',
        'Antibiotics to manage lung infections',
        'Pancreatic enzyme replacements to improve digestion',
        'Lung transplant in severe cases'
      ],
      prevention: 'Currently, there is no cure for cystic fibrosis, but early diagnosis, regular monitoring, and proactive treatment can help manage the symptoms and improve the quality of life.'
    },
    {
      name: 'Huntington’s Disease',
      slug: 'huntingtons-disease',
      summary: 'Huntington’s disease is a progressive neurodegenerative disorder that causes the breakdown of nerve cells in the brain. Symptoms usually appear in mid-adulthood and worsen over time, leading to severe physical and cognitive decline. The disease is often characterized by involuntary movements, mental deterioration, and psychiatric problems.',
      causes: 'Huntington’s disease is caused by an autosomal dominant mutation in the HTT gene. This mutation results in an abnormally long string of CAG repeats, leading to the production of a toxic protein that damages brain cells.',
      symptoms: [
        'Involuntary movements (chorea)',
        'Difficulty with balance and coordination',
        'Cognitive decline (memory problems, difficulty concentrating)',
        'Mood changes, irritability, and depression',
        'Speech and swallowing difficulties',
        'Weight loss despite normal eating habits'
      ],
      treatment: [
        'No cure is currently available, but medications can help manage symptoms.',
        'Antipsychotic drugs to control movements and psychiatric symptoms.',
        'Cognitive therapy to manage memory issues.',
        'Physical and occupational therapy to improve mobility and daily function.'
      ],
      prevention: 'As Huntington’s is inherited in an autosomal dominant manner, if a parent has the disease, their child has a 50% chance of inheriting the condition. Genetic testing can help determine whether an individual is at risk.'
    },
    {
      name: 'Sickle Cell Anemia',
      slug: 'sickle-cell-anemia',
      summary: 'Sickle cell anemia is a hereditary blood disorder characterized by abnormal hemoglobin, which causes red blood cells to become rigid and shaped like a crescent or sickle. These misshapen cells can block blood flow, leading to pain, organ damage, and other serious complications.',
      causes: 'The condition is caused by a mutation in the hemoglobin beta gene (HBB), which leads to the production of abnormal hemoglobin S. When red blood cells contain hemoglobin S, they deform and block blood flow.',
      symptoms: [
        'Episodes of pain (called sickle cell crises)',
        'Fatigue and weakness',
        'Pale skin and mucous membranes',
        'Shortness of breath',
        'Frequent infections',
        'Delayed growth in children'
      ],
      treatment: [
        'Pain management during crises',
        'Hydroxyurea, a medication that reduces the frequency of painful episodes',
        'Blood transfusions to increase the number of healthy red blood cells',
        'Bone marrow transplant (in severe cases)'
      ],
      prevention: 'There is no cure for sickle cell anemia, but early diagnosis through newborn screening allows for better management of symptoms. Genetic counseling and screening can help individuals understand their risk of having a child with the disease.'
    },
    {
      name: 'Alzheimer’s Disease',
      slug: 'alzheimers-disease',
      summary: 'Alzheimer’s disease is the most common cause of dementia, a condition that affects memory, thinking, and behavior. It is a progressive condition, meaning that the symptoms get worse over time, with the individual eventually losing the ability to perform even basic tasks. Early diagnosis is key to managing symptoms.',
      causes: 'Alzheimer’s is caused by the buildup of proteins (amyloid plaques and tau tangles) in the brain. These proteins interfere with communication between brain cells and eventually cause cell death. Genetic risk factors, including the APOE gene, can increase the risk of developing Alzheimer’s.',
      symptoms: [
        'Memory loss, especially recent memories',
        'Difficulty planning or solving problems',
        'Confusion with time or place',
        'Challenges with language, such as finding the right words',
        'Disorientation and hallucinations in later stages',
        'Personality and behavior changes'
      ],
      treatment: [
        'Cholinesterase inhibitors to help with memory and cognition',
        'Medications to manage mood and behavioral changes',
        'Cognitive therapies to help with memory and thinking',
        'Caregiver support and education'
      ],
      prevention: 'There is no cure for Alzheimer’s, but early detection can help manage symptoms. Lifestyle changes, such as physical activity, a healthy diet, and mental stimulation, may reduce the risk.'
    },
    {
      name: 'Down Syndrome',
      slug: 'down-syndrome',
      summary: 'Down syndrome is a genetic disorder caused by the presence of all or part of an extra 21st chromosome. This results in developmental and intellectual delays, as well as distinct physical features. It is a lifelong condition, but with early intervention and support, individuals with Down syndrome can lead fulfilling lives.',
      causes: 'Down syndrome is caused by a trisomy of chromosome 21, meaning that there are three copies of this chromosome instead of two. This occurs due to an error in cell division during the formation of the egg or sperm.',
      symptoms: [
        'Intellectual disability, ranging from mild to moderate',
        'Distinct facial features (flat face, almond-shaped eyes)',
        'Low muscle tone and joint laxity',
        'Short stature',
        'Heart defects in some individuals',
        'Delayed developmental milestones'
      ],
      treatment: [
        'Early intervention programs, including physical, speech, and occupational therapy',
        'Heart surgery if congenital defects are present',
        'Special education programs tailored to the individual’s needs'
      ],
      prevention: 'There is no known prevention, but prenatal testing (e.g., amniocentesis, chorionic villus sampling) can detect the condition during pregnancy.'
    },
    {
      name: 'Marfan Syndrome',
      slug: 'marfan-syndrome',
      summary: 'Marfan syndrome is a connective tissue disorder that affects multiple organ systems, including the heart, blood vessels, skeleton, and eyes. Individuals with Marfan syndrome are typically tall and thin with long limbs and fingers. The most serious complication of the condition is cardiovascular problems, particularly with the aorta.',
      causes: 'Marfan syndrome is caused by mutations in the FBN1 gene, which provides instructions for making fibrillin-1, a protein that helps maintain the elasticity and strength of connective tissue.',
      symptoms: [
        'Tall, slender body with long limbs and fingers',
        'Curved spine (scoliosis)',
        'Chest deformities (either sunken or protruding)',
        'Eye problems, such as dislocated lenses or nearsightedness',
        'Aortic dilation and risk of rupture'
      ],
      treatment: [
        'Beta blockers to reduce cardiovascular stress and prevent aortic enlargement',
        'Regular monitoring of the heart and aorta',
        'Surgery to repair or replace the aorta if it becomes dilated',
        'Glasses or contact lenses for vision issues'
      ],
      prevention: 'There is no cure, but individuals with Marfan syndrome can benefit from early diagnosis, genetic counseling, and regular checkups to monitor heart and vascular health.'
    },
    {
      name: 'Fragile X Syndrome',
      slug: 'fragile-x-syndrome',
      summary: 'Fragile X syndrome is a genetic condition that causes intellectual disability, particularly in males. It is the most common inherited cause of intellectual disability, and it also leads to emotional and behavioral challenges, including anxiety and social difficulties.',
      causes: 'Fragile X syndrome is caused by mutations in the FMR1 gene located on the X chromosome. This mutation leads to the absence or deficiency of the fragile X mental retardation protein (FMRP), which is essential for normal brain development.',
      symptoms: [
        'Intellectual disability or developmental delay',
        'Social and emotional difficulties, including social anxiety',
        'Repetitive behaviors such as hand-flapping or repetitive speech',
        'Sensory sensitivities (e.g., to light or touch)',
        'Hyperactivity and impulsivity'
      ],
      treatment: [
        'Behavioral therapy to address developmental delays',
        'Medication to manage symptoms of anxiety or hyperactivity',
        'Speech and language therapy',
        'Special education to support learning'
      ],
      prevention: 'There is no cure for Fragile X syndrome, but genetic counseling can help families understand the risk and make informed decisions.'
    },
    {
            name: 'Tay-Sachs Disease',
            slug: 'tay-sachs-disease',
            summary: 'Tay-Sachs disease is a rare, inherited disorder that progressively destroys nerve cells in the brain and spinal cord. It is most commonly seen in infants, leading to severe developmental regression, blindness, and eventually death, usually before the age of four.',
            causes: 'Tay-Sachs is caused by mutations in the HEXA gene on chromosome 15. This mutation leads to a deficiency of the enzyme hexosaminidase A, which is responsible for breaking down a fatty substance called GM2 ganglioside. The buildup of GM2 ganglioside in nerve cells causes irreversible damage and cell death.',
            symptoms: [
              'Loss of motor skills and coordination',
              'Severe developmental delays',
              'Vision loss or blindness',
              'Hearing loss',
              'Muscle weakness and paralysis',
              'Seizures',
              'Cherry-red spot in the eye (a characteristic sign of Tay-Sachs)'
            ],
            treatment: [
              'There is no cure for Tay-Sachs disease, but treatment focuses on managing symptoms and improving quality of life.',
              'Physical therapy to support movement and muscle function',
              'Speech therapy to assist with communication',
              'Medications to control seizures and other symptoms',
              'Supportive care, including hospice care for advanced stages'
            ],
            prevention: 'Genetic counseling and carrier screening are recommended for families with a history of Tay-Sachs. Carrier screening can help determine if a person carries the gene mutation for Tay-Sachs, and prenatal testing can be done during pregnancy to check for the disease.'
          },

          {
            name: 'Klinefelter Syndrome',
            slug: 'klinefelter-syndrome',
            summary: 'Klinefelter syndrome is a genetic condition that affects males, caused by the presence of an extra X chromosome (47,XXY instead of the typical 46,XY). It can result in physical, developmental, and reproductive challenges, but symptoms vary widely, and many individuals live full, healthy lives with proper support.',
            causes: 'Klinefelter syndrome occurs due to a random error during the formation of reproductive cells (eggs or sperm), leading to an extra X chromosome. It is not inherited but happens as a random event during cell division.',
            symptoms: [
              'Taller than average height',
              'Reduced muscle mass and strength',
              'Broader hips and less facial and body hair',
              'Enlarged breast tissue (gynecomastia)',
              'Small testes and reduced testosterone levels',
              'Infertility or difficulty with fertility',
              'Learning difficulties, especially with language and reading',
              'Social and emotional challenges'
            ],
            treatment: [
              'While there is no cure for Klinefelter syndrome, early diagnosis and supportive treatments can greatly improve quality of life.',
              'Testosterone replacement therapy to promote normal male sexual development and improve muscle strength and mood',
              'Speech and language therapy to address communication difficulties',
              'Educational support to help with learning challenges',
              'Fertility treatment options for those wishing to have children',
              'Psychological counseling to support emotional and social wellbeing'
            ],
            prevention: 'Klinefelter syndrome cannot be prevented because it is caused by a random genetic error. However, early detection through prenatal testing or chromosomal analysis after birth allows for timely intervention and management.'
          },
          {
            name: 'Turner Syndrome',
            slug: 'turner-syndrome',
            summary: 'Turner syndrome is a genetic condition that affects females, caused by a complete or partial absence of one X chromosome. It can lead to a variety of developmental and medical challenges, particularly involving growth and sexual development.',
            causes: 'Turner syndrome is caused by a missing or incomplete X chromosome. This can occur due to a random error during the formation of reproductive cells or in early fetal development. It is typically not inherited and happens by chance.',
            symptoms: [
              'Short stature',
              'Delayed puberty or incomplete sexual development',
              'Infertility due to nonfunctional ovaries',
              'Heart defects, particularly of the aorta',
              'Kidney abnormalities',
              'Webbed neck (extra folds of skin)',
              'Low hairline at the back of the neck',
              'Swelling of hands and feet (especially at birth)',
              'Learning difficulties, particularly with math and spatial concepts'
            ],
            treatment: [
              'There is no cure for Turner syndrome, but early diagnosis and appropriate treatments can significantly improve development and quality of life.',
              'Growth hormone therapy to help increase height',
              'Estrogen replacement therapy to initiate and maintain puberty',
              'Fertility treatments or assisted reproductive technologies if pregnancy is desired',
              'Regular monitoring and treatment of heart, kidney, and thyroid conditions',
              'Educational support and therapies to address learning challenges'
            ],
            prevention: 'Turner syndrome cannot be prevented because it results from a random chromosomal error. However, prenatal testing through procedures like amniocentesis can detect the condition before birth, allowing for early planning and care.'
          },       
          {
            name: 'Alpha-1 Antitrypsin Deficiency',
            slug: 'alpha-1-antitrypsin-deficiency',
            summary: 'Alpha-1 Antitrypsin Deficiency (AATD) is a genetic disorder that can cause serious lung disease in adults and liver disease in both children and adults. It results from a deficiency of the alpha-1 antitrypsin protein, which protects the lungs from inflammation caused by infection and irritants like tobacco smoke.',
            causes: 'AATD is caused by mutations in the SERPINA1 gene, leading to low levels or dysfunctional forms of alpha-1 antitrypsin protein. Without enough functional protein, lung tissue becomes vulnerable to damage, and abnormal protein buildup in the liver can lead to liver disease.',
            symptoms: [
              'Shortness of breath, especially after mild activity',
              'Wheezing and chronic cough',
              'Frequent respiratory infections',
              'Fatigue',
              'Unexplained liver problems (jaundice, swelling, or liver failure)',
              'In infants: prolonged jaundice, poor weight gain, and enlarged liver or spleen'
            ],
            treatment: [
              'There is no cure for AATD, but treatments can help manage symptoms and slow disease progression.',
              'Avoidance of smoking and lung irritants',
              'Bronchodilators and inhaled steroids to improve breathing',
              'Augmentation therapy (IV infusions of alpha-1 antitrypsin protein)',
              'Oxygen therapy for advanced lung disease',
              'Liver transplant in severe cases of liver failure'
            ],
            prevention: 'Alpha-1 Antitrypsin Deficiency cannot be prevented since it is inherited. However, genetic testing and family screening can help with early diagnosis. Lifestyle changes, especially avoiding smoking, can greatly reduce the risk of developing severe symptoms.'
          },
          {
            name: 'Neurofibromatosis',
            slug: 'neurofibromatosis',
            summary: 'Neurofibromatosis (NF) refers to a group of genetic disorders that cause tumors to form on nerve tissue. These tumors are usually noncancerous (benign) but can sometimes become cancerous. NF can affect the brain, spinal cord, and nerves throughout the body, leading to a range of complications.',
            causes: 'Neurofibromatosis is primarily caused by mutations in specific genes: NF1 gene (for Neurofibromatosis Type 1) or NF2 gene (for Neurofibromatosis Type 2). A related condition called schwannomatosis involves other gene mutations. These genetic changes disrupt the normal control of cell growth, leading to tumor formation.',
            symptoms: [
              'Café-au-lait spots (light brown skin patches)',
              'Freckling in the armpits or groin area',
              'Soft, benign tumors (neurofibromas) on or under the skin',
              'Lisch nodules (tiny bumps on the iris of the eye)',
              'Bone deformities (such as scoliosis or bowed legs)',
              'Learning disabilities or developmental delays',
              'Hearing loss, ringing in the ears, or balance problems (more common in NF2)'
            ],
            treatment: [
              'There is no cure for neurofibromatosis, but treatments focus on managing symptoms and complications.',
              'Regular monitoring through physical exams, imaging, and hearing tests',
              'Surgical removal of tumors if they cause pain, affect function, or become cancerous',
              'Radiation therapy for certain tumor types (especially in NF2)',
              'Pain management and physical therapy',
              'Educational support for learning difficulties'
            ],
            prevention: 'Neurofibromatosis cannot be prevented since it is inherited or caused by spontaneous gene mutations. Genetic counseling is recommended for individuals with NF who are planning to have children, as there is a 50% chance of passing the condition to offspring.'
          },          
          {
            name: 'Duchenne Muscular Dystrophy',
            slug: 'duchenne-muscular-dystrophy',
            summary: 'Duchenne Muscular Dystrophy (DMD) is a severe type of muscular dystrophy that primarily affects boys. It leads to progressive muscle degeneration and weakness due to alterations of the dystrophin protein, which helps keep muscle cells intact.',
            causes: 'DMD is caused by mutations in the DMD gene on the X chromosome. This gene is responsible for producing dystrophin, a protein crucial for muscle strength and stability. Without functional dystrophin, muscle cells are easily damaged and gradually die.',
            symptoms: [
              'Delayed motor milestones (such as walking)',
              'Frequent falls and difficulty running or jumping',
              'Enlarged calf muscles (pseudohypertrophy)',
              'Waddling gait and difficulty standing up from a sitting or lying position (Gowers’ sign)',
              'Progressive muscle weakness, starting in the hips, pelvis, and thighs',
              'Loss of the ability to walk (typically by early teens)',
              'Cardiomyopathy (heart muscle weakness)',
              'Respiratory difficulties in later stages'
            ],
            treatment: [
              'There is no cure for DMD, but treatments aim to slow disease progression and improve quality of life.',
              'Corticosteroids (such as prednisone) to help preserve muscle strength',
              'Heart medications to manage cardiomyopathy',
              'Physical therapy and occupational therapy to maintain mobility and prevent contractures',
              'Breathing assistance with ventilators as respiratory muscles weaken',
              'Surgical interventions for scoliosis or other orthopedic complications',
              'Emerging gene therapy and exon-skipping treatments (still under research and development)'
            ],
            prevention: 'Since DMD is inherited in an X-linked recessive pattern, genetic counseling and carrier testing are recommended for women with a family history of the disease. Prenatal testing and preimplantation genetic diagnosis (PGD) during IVF can help identify affected embryos.'
          },
          {
            name: 'Achondroplasia',
            slug: 'achondroplasia',
            summary: 'Achondroplasia is the most common form of dwarfism, characterized by short stature, disproportionately short arms and legs, and specific facial features. Despite these physical differences, intelligence and life expectancy are usually normal.',
            causes: 'Achondroplasia is caused by mutations in the FGFR3 gene (fibroblast growth factor receptor 3). This gene mutation causes the receptor to be overly active, which disrupts the normal development of bone from cartilage, particularly in the long bones.',
            symptoms: [
              'Short stature with an average adult height of about 4 feet (1.2 meters)',
              'Disproportionately short arms and legs, especially the upper arms and thighs',
              'Large head with a prominent forehead (frontal bossing)',
              'Flattened bridge of the nose',
              'Short fingers (brachydactyly) and separation between the middle and ring fingers ("trident" hand)',
              'Spinal curvature (lordosis or kyphosis)',
              'Possible breathing problems due to narrowed airways',
              'Frequent ear infections and risk of hearing loss'
            ],
            treatment: [
              'There is no cure for achondroplasia, but treatment focuses on managing symptoms and maximizing quality of life.',
              'Monitoring and managing spinal stenosis and orthopedic complications',
              'Surgical interventions if needed (e.g., to correct spinal issues or leg bowing)',
              'Growth hormone therapy (limited effectiveness and still debated)',
              'Supportive therapies such as physical therapy and occupational therapy',
              'Regular monitoring for ear infections and respiratory issues'
            ],
            prevention: 'Most cases of achondroplasia result from new (de novo) mutations, meaning they occur spontaneously and are not inherited. However, genetic counseling is recommended for prospective parents who have achondroplasia or have a family history of the condition. Prenatal genetic testing is available.'
          },
          
  ];
  