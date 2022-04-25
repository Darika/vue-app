<template>
  <div>
    <h2 class="content-block">Задачи</h2>

    <dx-data-grid
      class="dx-card wide-card"
      :data-source="dataSourceConfig"
      :focused-row-index="0"
      :show-borders="false"
      :focused-row-enabled="true"
      :column-auto-width="true"
      :column-hiding-enabled="true"
    >
      <dx-paging :page-size="10" />
      <dx-pager :show-page-size-selector="true" :show-info="true" />
      <dx-filter-row :visible="true" />

      <dx-column data-field="Task_ID" :width="90" :hiding-priority="2" />

      <dx-column
        data-field="Task_Subject"
        caption="Название"
        :width="190"
        :hiding-priority="8"
      />

      <dx-column
        data-field="Task_Status"
        caption="Статус"
        :hiding-priority="6"
      />

      <dx-column
        data-field="Task_Priority"
        caption="Приоритет"
        :hiding-priority="5"
      >
        <dx-lookup
          display-expr="name"
          value-expr="value"
          :data-source="priorities"
        />
      </dx-column>

      <dx-column
        data-field="ResponsibleEmployee.Employee_Full_Name"
          caption="Исполнитель"
        :allow-sorting="false"
        :hiding-priority="7"
      />

      <dx-column
        data-field="Task_Start_Date"
        caption="Начало"
        data-type="date"
        :hiding-priority="3"
      />

      <dx-column
        data-field="Task_Due_Date"
        caption="Срок"
        data-type="date"
        :hiding-priority="4"
      />

      <dx-column
        data-field="Task_Priority"
        caption="Priority"
        name="Priority"
        :hiding-priority="1"
      />

      <dx-column
        data-field="Task_Completion"
        caption="Завершение"
        :hiding-priority="0"
      />
    </dx-data-grid>
  </div>
</template>

<script>
import "devextreme/data/odata/store";
import DxDataGrid, {
  DxColumn,
  DxFilterRow,
  DxLookup,
  DxPager,
  DxPaging
} from "devextreme-vue/data-grid";

import {DataTasks} from "/src/data_tasks.js";

const priorities = [
  { name: "High", value: 4 },
  { name: "Urgent", value: 3 },
  { name: "Normal", value: 2 },
  { name: "Low", value: 1 }
];

export default {
  data() {
    return {
      priorities
    };
  },
  created() {
    this.dataSourceConfig = {
      store: {
        type: "odata",
        key: "Task_ID",
        url: DataTasks
      },
      expand: "ResponsibleEmployee",
      select: [
        "Task_ID",
        "Task_Subject",
        "Task_Start_Date",
        "Task_Due_Date",
        "Task_Status",
        "Task_Priority",
        "Task_Completion",
        "ResponsibleEmployee/Employee_Full_Name"
      ]
    };
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxLookup,
    DxPager,
    DxPaging
  }
};
</script>
