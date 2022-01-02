<template>
  <v-card>
    <v-system-bar></v-system-bar>
    <v-toolbar flat>
      <v-toolbar-title>PER 계산기</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
      </div>
    </v-toolbar>
    <v-banner
      single-line
      :sticky="sticky"
    >
      per을 계산하기 위한 계산기
    </v-banner>
    <v-card-text class="grey lighten-4">
      <v-sheet
        max-width="800"
        height="650"
        class="mx-auto"
      >
      
      <v-container>
      <v-row>

        <v-col
          cols="12"
          sm="8"
        >
          <v-text-field
            v-model=calculationData.marketCap
            label="시가총액"
            clearable
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="8"
        >
          <v-text-field
            v-model=calculationData.netIncome
            label="당기순이익"
            clearable
          ></v-text-field>
        </v-col>
        
        <v-btn
        class="ma-2"
        color="primary"
        dark
        v-on:click="calculPer"
       >
        계산하기
        <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
      </v-btn>
      </v-row>
        <v-card
    class="mx-auto"
    max-width="344"
    >

    <v-card-title>
      계산값
    </v-card-title>

    <v-card-subtitle>
    PER이란?
    </v-card-subtitle>

      <v-spacer></v-spacer>
      <v-divider></v-divider>

        <v-card-text>
          {{ per }}
        </v-card-text>
  </v-card>
    </v-container>
      
      </v-sheet>
    </v-card-text>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      sticky: false,
      show: false,
      calculationData:{
        marketCap:0,
        netIncome:0
      },
      per:0,
    }),
    methods:{
      calculPer() {
        const v = this;
        const calculData = v.calculationData;
        const per = calculData.marketCap / calculData.netIncome;
        
        v.per = per;

      }
    }
  }
</script>