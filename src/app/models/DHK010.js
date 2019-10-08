/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DHK010', {
    DHK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DHK_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DHK_DESCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DHK_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DHK_LEGEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DHK_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DHK_SOLCOM: {
      type: "IMAGE",
      allowNull: true
    },
    DHK_PEDCOM: {
      type: "IMAGE",
      allowNull: true
    },
    DHK_APROVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_APROVP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_PRAZO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DHK_AVISO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DHK_ESCALO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_PAPRES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_PAPRPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_PRAZOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DHK_AVISOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DHK_ESCALP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_TOLDFS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DHK_LIBPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_TOLERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_ESCTPC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    DHK_ESCTSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'DHK010'
  });
};
