<template>
  <div class="q-pa-md">
    <div class="q-pa-md q-gutter-sm">
      <q-btn no-caps push color="primary" label="List BottomSheet" @click="show()" />
      <q-btn
        no-caps
        push
        color="white"
        text-color="primary"
        label="Grid BottomSheet"
        @click="show(true)"
      />
    </div>
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step :name="1" title="Select campaign settings" icon="settings" :done="step > 1">
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >An ad group contains one or more ads which target a shared set of keywords.</q-step>

      <q-step
        :name="3"
        title="Ad template"
        icon="assignment"
        disable
      >This step won't show up because it is disabled.</q-step>

      <q-step :name="4" title="Create an ad" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 4 ? 'Finish' : 'Continue'"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>

    <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
      <h1 class="text-white">Basic</h1>
    </q-parallax>
    <div class="q-pa-md">
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
    </div>
    <div class="q-pa-md row flex-center">
      <q-btn
        v-touch-repeat:0:1000.mouse.enter.space="decrement"
        color="primary"
        push
        round
        class="q-mr-sm"
        icon="remove"
      />

      <q-btn
        v-touch-repeat:0:100.mouse.enter.space="decrement"
        color="red"
        push
        round
        icon="remove"
      />

      <span class="q-mx-md">{{ number }}</span>

      <q-btn
        v-touch-repeat:0:100.mouse.enter.space="increment"
        color="red"
        push
        round
        class="q-mr-sm"
        icon="add"
      />

      <q-btn
        v-touch-repeat:0:1000.mouse.enter.space="increment"
        color="primary"
        push
        round
        icon="add"
      />
    </div>
    <!-- <div class="q-pa-md q-gutter-sm">
      <q-btn label="Radio Options" color="primary" @click="radio" />
      <q-btn label="Checkbox Options" color="primary" @click="checkbox" />
      <q-btn label="Toggle Options" color="primary" @click="toggle" />
    </div> -->
    <div class="q-pa-md q-gutter-md">
    <q-list bordered class="rounded-borders" style="max-width: 350px">
      <q-item-label header>Friends</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-separator inset="item" />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered class="rounded-borders" style="max-width: 600px">
      <q-item-label header>Google Inbox style</q-item-label>

      <q-item>
        <q-item-section avatar top>
          <q-icon name="account_tree" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">GitHub</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">[quasarframework/quasar]</span>
            <span class="text-grey-8"> - GitHub repository</span>
          </q-item-label>
          <q-item-label caption lines="1">
            @rstoenescu in #3: > Generic type parameter for props
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">Open in GitHub</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar top>
          <q-icon name="account_tree" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">GitHub</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">[quasarframework/quasar]</span>
            <span class="text-grey-8"> - GitHub repository</span>
          </q-item-label>
          <q-item-label caption lines="1">
            @rstoenescu in #1: > The build system
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">Open in GitHub</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      slide: 1,
      number: 110
    };
  },
  methods: {
       toggle () {
      this.$q.dialog({
        title: 'Options',
        message: 'Choose your options, but make sure you also pick the first two.',
        options: {
          type: 'toggle',
          model: [],
          isValid: model => model.includes('opt1') && model.includes('opt2'),
          // inline: true,
          items: [
            { label: 'Option 1', value: 'opt1', color: 'secondary' },
            { label: 'Option 2', value: 'opt2' },
            { label: 'Option 3', value: 'opt3' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        // console.log('>>>> OK, received', data)
      })
    },
    decrement() {
      this.number--;
    },

    increment() {
      this.number++;
    },
    show(grid) {
      this.$q
        .bottomSheet({
          dark: false,
          message: "Bottom Sheet message",
          grid,
          actions: [
            {
              label: "Drive",
              img: "https://cdn.quasar.dev/img/logo_drive_128px.png",
              id: "drive"
            },
            {
              label: "Keep",
              img: "https://cdn.quasar.dev/img/logo_keep_128px.png",
              id: "keep"
            },
            {
              label: "Google Hangouts",
              img: "https://cdn.quasar.dev/img/logo_hangouts_128px.png",
              id: "calendar"
            },
            {
              label: "Calendar",
              img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
              id: "calendar"
            },
            {},
            {
              label: "Share",
              icon: "share",
              id: "share"
            },
            {
              label: "Upload",
              icon: "cloud_upload",
              color: "primary",
              id: "upload"
            },
            {},
            {
              label: "John",
              avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
              id: "john"
            }
          ]
        })
        .onOk(action => {
          // console.log('Action chosen:', action.id)
        })
        .onCancel(() => {
          // console.log('Dismissed')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
  }
};
</script>
