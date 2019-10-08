/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFQ010', {
    FQ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FQ_ENTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_PREFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_NUMORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FQ_PARCORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_TIPOORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_CFORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FQ_LOJAORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FQ_SEQORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FQ_ENTDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_PREFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_NUMDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    FQ_PARCDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_TIPODES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_CFDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FQ_LOJADES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FQ_SEQDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FQ_FILDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FQ_TPIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FQ_SABTPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FQ_SABTCSL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FQ_SABTCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    tableName: 'SFQ010'
  });
};
