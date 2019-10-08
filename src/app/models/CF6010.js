/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CF6010', {
    CF6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF6_TIPONF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF6_CLIFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CF6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF6_NUMDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CF6_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CF6_CODMOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CF6_DTOPER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CF6_CHVNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    CF6_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CF6_VLOPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF6_CFOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    CF6_NATBCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF6_ORICRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CF6_CSTPIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF6_BASPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF6_ALQPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF6_VALPIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF6_CSTCOF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CF6_BASCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF6_ALQCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF6_VALCOF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CF6_CODCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CF6_CODCCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    CF6_DESCCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CF6_PERESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CF6_CODCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CF6_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
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
    CF6_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'CF6010'
  });
};
