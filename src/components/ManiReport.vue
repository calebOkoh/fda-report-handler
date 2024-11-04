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
      "I've been taking Paracetamol to relieve my headaches and reduce fever, but I've had a few issues. Sometimes I get an allergic reaction, and I noticed a rash on my skin. I also worry about the risk of liver damage if I take too much.",
    sideEffects: [
      "Allergic reactions",
      "Skin rash",
      "Liver damage with overdose",
    ],
  },
  {
    manifacturer: "Merck & Co.",
    drugName: "Metformin",
    date: "2024-09-03",
    lotNumber: "MFT56432",
    delivery: "Oral tablets, 500mg, 850mg, or 1000mg per dose",
    description:
      "I’m taking Metformin for my blood sugar, but it’s not without its issues. I often feel nauseous and experience diarrhea. The possibility of lactic acidosis also worries me.",
    sideEffects: ["Nausea", "Diarrhea", "Lactic acidosis"],
  },
  {
    manifacturer: "Novartis",
    drugName: "Omeprazole",
    date: "2024-06-11",
    lotNumber: "NP98765",
    delivery: "Oral delayed-release capsules, 20mg or 40mg per dose",
    description:
      "I take Omeprazole for my acid reflux, but it's not perfect. It often gives me headaches and stomach pain, and I'm concerned it could lead to a vitamin B12 deficiency.",
    sideEffects: ["Headache", "Stomach pain", "Vitamin B12 deficiency"],
  },
  {
    manifacturer: "Pfizer",
    drugName: "Ibuprofen",
    date: "2024-05-15",
    lotNumber: "PF45678",
    delivery: "Oral tablets, 200mg or 400mg per dose",
    description:
      "Ibuprofen helps with my inflammation, but I've noticed some stomach pain and nausea. I'm also aware of the increased risk of heart attack that comes with taking it.",
    sideEffects: ["Stomach pain", "Nausea", "Increased risk of heart attack"],
  },
  {
    manifacturer: "AstraZeneca",
    drugName: "Aspirin",
    date: "2024-08-01",
    lotNumber: "AZ12345",
    delivery: "Oral tablets, 325mg per dose",
    description:
      "Aspirin helps with my pain and inflammation, but I worry about the gastrointestinal bleeding it can cause. I also have to be careful about allergic reactions and the risk of Reye's syndrome in children.",
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
      "I take Tamiflu to prevent the flu, but it sometimes causes me nausea and even vomiting. I’ve also experienced occasional delirium, which is unsettling.",
    sideEffects: ["Nausea", "Vomiting", "Delirium"],
  },
  {
    manifacturer: "GlaxoSmithKline",
    drugName: "Amoxicillin",
    date: "2024-02-18",
    lotNumber: "GSK33112",
    delivery: "Oral capsules, 500mg per dose",
    description:
      "Amoxicillin works well for my infections, but I’ve had some unpleasant side effects like diarrhea, rashes, and occasional allergic reactions.",
    sideEffects: ["Diarrhea", "Rash", "Allergic reactions"],
  },
  {
    manifacturer: "Bayer",
    drugName: "Ciprofloxacin",
    date: "2024-04-11",
    lotNumber: "BYR55621",
    delivery: "Oral tablets, 500mg per dose",
    description:
      "Ciprofloxacin helps with my infections, but I sometimes feel nauseous, and the risk of tendon rupture and dizziness can be concerning.",
    sideEffects: ["Nausea", "Tendon rupture", "Dizziness"],
  },
  {
    manifacturer: "Sanofi",
    drugName: "Lantus",
    date: "2024-01-05",
    lotNumber: "SNF78801",
    delivery: "Injectable insulin, 100 units/mL",
    description:
      "Lantus helps manage my diabetes, but I often worry about hypoglycemia. I also get injection site reactions and sometimes experience weight gain.",
    sideEffects: ["Hypoglycemia", "Injection site reactions", "Weight gain"],
  },
  {
    manifacturer: "Eli Lilly",
    drugName: "Insulin Lispro",
    date: "2024-03-09",
    lotNumber: "LLY12344",
    delivery: "Injectable insulin, 100 units/mL",
    description:
      "Insulin Lispro is fast-acting for my diabetes, but I occasionally experience hypoglycemia and have some allergic reactions. I've also noticed some weight gain.",
    sideEffects: ["Hypoglycemia", "Allergic reactions", "Weight gain"],
  },
  {
    manifacturer: "Boehringer Ingelheim",
    drugName: "Spiriva",
    date: "2024-08-30",
    lotNumber: "BI98776",
    delivery: "Inhalation capsules, 18mcg per dose",
    description:
      "Spiriva helps me breathe easier with COPD, but it does cause dry mouth and constipation. I also get a scratchy feeling in my throat sometimes.",
    sideEffects: ["Dry mouth", "Constipation", "Throat irritation"],
  },
  {
    manifacturer: "Teva Pharmaceuticals",
    drugName: "Albuterol",
    date: "2024-05-19",
    lotNumber: "TVA90876",
    delivery: "Inhaler, 90mcg per actuation",
    description:
      "Albuterol helps with my bronchospasms, but it does make me feel shaky, and my heart races sometimes. I also get headaches from time to time.",
    sideEffects: ["Shakiness", "Fast heartbeat", "Headache"],
  },
];
</script>
