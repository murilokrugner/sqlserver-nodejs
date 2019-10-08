/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AB6010', {
    AB6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB6_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB6_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB6_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB6_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB6_ATEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    AB6_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB6_CONPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AB6_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_DESC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AB6_PARC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_DATA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB6_PARC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_DATA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB6_PARC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_DATA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB6_PARC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_DATA4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AB6_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB6_HORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AB6_REGIAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AB6_MSG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    AB6_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_TXMOED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AB6_NUMLOJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB6_CONTRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AB6_TPCONT: {
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
    },
    AB6_TPORCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AB6_CDORCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    AB6_ITORCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AB6_FIORCS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AB6_ORCAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '           '
    },
    AB6_FILORC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'AB6010'
  });
};
