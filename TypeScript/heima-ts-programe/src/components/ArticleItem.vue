<template>
    <article>
        <h1>Here is  the headline.</h1>
        <div class="content">
            <p>Maybe has one picture.</p>
            <p>Here is the content.</p>
        </div>
        <div class="content-footer">
            <p>author`s name</p>
            <p>0comments</p>
            <p>2024-3-22</p>
        </div>
    </article>
</template>

<style scoped>
    article {
        padding: 0 1rem;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .content-footer{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }
    .content-footer p {
        color: #ccc;
        margin-right: .8rem;
    }
    .content-footer p:last-child {
      flex-grow: 1;
    }
</style>