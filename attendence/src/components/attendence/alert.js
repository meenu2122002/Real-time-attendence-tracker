import React from 'react'

function Alert() {
  return (
    <div>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Oops!</strong>It seems you have skipped taking some students attendence
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

export default Alert
