/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAO010', {
    AO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AO_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AO_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AO_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO_NOMINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AO_NOMFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO_TELEFON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AO_CONTATO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO_DESDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AO_ULTCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AO_MAICOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AO_VLRMAI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AO_PAGPON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO_BCOCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO_LIMCRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AO_MOVCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AO_OUTOPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AO_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
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
    AO_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'SAO010'
  });
};
