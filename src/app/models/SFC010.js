/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFC010', {
    FC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FC_TES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FC_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FC_IMPOSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FC_INCDUPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FC_INCNOTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FC_CREDITA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FC_INCIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FC_BASE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FC_CALCULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FC_LIQUIDO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FC_AGRBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FC_PROV: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    FC_IDHIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    }
  }, {
    tableName: 'SFC010'
  });
};
