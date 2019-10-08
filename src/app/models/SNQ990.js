/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SNQ990', {
    NQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NQ_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    NQ_REVISAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    NQ_DATAINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NQ_QTDMES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    NQ_GRPBENS: {
      type: "IMAGE",
      allowNull: true
    },
    NQ_CCDEPR: {
      type: "IMAGE",
      allowNull: true
    },
    NQ_CCCDEP: {
      type: "IMAGE",
      allowNull: true
    },
    NQ_SUBCCDE: {
      type: "IMAGE",
      allowNull: true
    },
    NQ_CLVLCDE: {
      type: "IMAGE",
      allowNull: true
    },
    NQ_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NQ_DCONTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    NQ_BASMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    NQ_FILDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    NQ_FILATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    }
  }, {
    tableName: 'SNQ990'
  });
};
