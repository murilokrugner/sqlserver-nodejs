/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EVL010', {
    EVL_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    EVL_TEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EVL_ORGAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EVL_INDIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    EVL_TRATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EVL_EX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    EVL_DESCEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EVL_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EVL_DTFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    EVL_ABRAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    EVL_FUNLEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EVL_DESCME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EVL_PAIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    EVL_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EVL_REGIME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EVL_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EVL_REGTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    EVL_CORETR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    EVL_TEXTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    EVL_LI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    tableName: 'EVL010'
  });
};
