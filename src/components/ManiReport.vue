<template>
  <NavigationBar />
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'manifacturer'">
        <span>
          <smile-outlined />
          Manifacturer
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'manifacturer'">
        <a>
          {{ record.manifacturer }}
        </a>
      </template>
      <template v-else-if="column.key === 'sideEffects'">
        <span>
          <a-tag
            v-for="tag in record.sideEffects"
            :key="tag"
            :color="
              tag === 'ALLERGIC REACTIONS'
                ? 'HYPOGLYCEMIA'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { SmileOutlined } from "@ant-design/icons-vue";
import NavigationBar from "./NavigationBar.vue";

const columns = [
  {
    name: "Manifacturer",
    dataIndex: "manifacturer",
    key: "manifacturer",
  },
  {
    title: "Date Used",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Drug Name",
    dataIndex: "drugName",
    key: "drugName",
  },
  {
    title: "Lot Number",
    dataIndex: "lotNumber",
    key: "lotNumber",
  },
  {
    title: "Side Effects",
    key: "sideEffects",
    dataIndex: "sideEffects",
  },
  {
    title: "Description",
    key: "description",
    dataIndex: "description",
  },
];

// chnage this to extenral import later

const data = [
  {
    manifacturer: "Johnson & Johnson",
    drugName: "Paracetamol",
    date: "2024-07-21",
    lotNumber: "JX78910",
    delivery: "Oral tablets, 500mg per dose",
    description:
      "Paracetamol is used to treat pain and reduce fever. It is one of the most common medications for headaches, muscle pain, toothaches, and colds.",
    sideEffects: [
      "Allergic reactions",
      "Skin rash",
      "Liver damage with overdose",
    ],
  },
  {
    Manifacturer: "Merck & Co.",
    DrugName: "Metformin",
    Date: "2024-09-03",
    LotNumber: "MFT56432",
    Delivery: "Oral tablets, 500mg, 850mg, or 1000mg per dose",
    Description:
      "Metformin is used to control high blood sugar in people with type 2 diabetes. It helps restore your body's proper response to insulin and decreases the amount of sugar your liver makes.",
    SideEffects: ["Nausea", "Diarrhea", "Lactic acidosis"],
  },
  {
    manifacturer: "Novartis",
    drugName: "Omeprazole",
    date: "2024-06-11",
    lotNumber: "NP98765",
    delivery: "Oral delayed-release capsules, 20mg or 40mg per dose",
    description:
      "Omeprazole is used to treat certain stomach and esophagus problems such as acid reflux and ulcers. It works by decreasing the amount of acid the stomach makes.",
    sideEffects: ["Headache", "Stomach pain", "Vitamin B12 deficiency"],
  },
  {
    manifacturer: "Pfizer",
    drugName: "Ibuprofen",
    date: "2024-05-15",
    lotNumber: "PF45678",
    delivery: "Oral tablets, 200mg or 400mg per dose",
    description:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and treat pain or inflammation.",
    sideEffects: ["Stomach pain", "Nausea", "Increased risk of heart attack"],
  },
  {
    manifacturer: "AstraZeneca",
    drugName: "Aspirin",
    date: "2024-08-01",
    lotNumber: "AZ12345",
    delivery: "Oral tablets, 325mg per dose",
    description:
      "Aspirin is used to reduce fever, pain, and inflammation. It is also used to prevent blood clots in patients with a history of heart attacks or strokes.",
    sideEffects: [
      "Gastrointestinal bleeding",
      "Allergic reactions",
      "Reye’s syndrome in children",
    ],
  },
  {
    manifacturer: "Roche",
    drugName: "Tamiflu",
    date: "2024-10-02",
    lotNumber: "RCH20211",
    delivery: "Oral capsules, 75mg per dose",
    description:
      "Tamiflu is an antiviral medication used to treat and prevent influenza (flu).",
    sideEffects: ["Nausea", "Vomiting", "Delirium"],
  },
  {
    manifacturer: "GlaxoSmithKline",
    drugName: "Amoxicillin",
    date: "2024-02-18",
    lotNumber: "GSK33112",
    delivery: "Oral capsules, 500mg per dose",
    description:
      "Amoxicillin is an antibiotic used to treat various bacterial infections such as pneumonia, bronchitis, and infections of the ear, throat, and urinary tract.",
    sideEffects: ["Diarrhea", "Rash", "Allergic reactions"],
  },
  {
    manifacturer: "Bayer",
    drugName: "Ciprofloxacin",
    date: "2024-04-11",
    lotNumber: "BYR55621",
    delivery: "Oral tablets, 500mg per dose",
    description:
      "Ciprofloxacin is an antibiotic used to treat bacterial infections such as urinary tract infections, respiratory infections, and skin infections.",
    sideEffects: ["Nausea", "Tendon rupture", "Dizziness"],
  },
  {
    manifacturer: "Sanofi",
    drugName: "Lantus",
    date: "2024-01-05",
    lotNumber: "SNF78801",
    delivery: "Injectable insulin, 100 units/mL",
    description:
      "Lantus is a long-acting insulin used to treat diabetes mellitus in adults and children.",
    sideEffects: ["Hypoglycemia", "Injection site reactions", "Weight gain"],
  },
  {
    manifacturer: "Eli Lilly",
    drugName: "Insulin Lispro",
    date: "2024-03-09",
    lotNumber: "LLY12344",
    delivery: "Injectable insulin, 100 units/mL",
    description:
      "Insulin Lispro is a fast-acting insulin used to control high blood sugar in people with diabetes.",
    sideEffects: ["Hypoglycemia", "Allergic reactions", "Weight gain"],
  },
  {
    manifacturer: "Boehringer Ingelheim",
    drugName: "Spiriva",
    date: "2024-08-30",
    lotNumber: "BI98776",
    delivery: "Inhalation capsules, 18mcg per dose",
    description:
      "Spiriva is used to treat chronic obstructive pulmonary disease (COPD) by helping to open airways and make breathing easier.",
    sideEffects: ["Dry mouth", "Constipation", "Throat irritation"],
  },
  {
    manifacturer: "Teva Pharmaceuticals",
    drugName: "Albuterol",
    date: "2024-05-19",
    lotNumber: "TVA90876",
    delivery: "Inhaler, 90mcg per actuation",
    description:
      "Albuterol is a bronchodilator used to treat or prevent bronchospasm in people with reversible obstructive airway disease.",
    sideEffects: ["Shakiness", "Fast heartbeat", "Headache"],
  },
];
</script>
