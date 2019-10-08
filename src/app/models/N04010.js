/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('N04010', {
    N04_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N04_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N04_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N04_COMP1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    N04_CODPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    N04_COMP2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N04_ISENCA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N04_DATAIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N04_DATAV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N04_INCENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N04_MICRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N04_FORMAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    N04_COMP3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N04_ATIVID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    N04_COMP5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    N04_PERMAT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N04_AREAOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    N04_TITULO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    N04_PREFIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N04_END: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    N04_CRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N04_PROTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N04_FISCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N04_BAIRRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    N04_INSCRM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    N04_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N04_ONLINE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    N04_LOGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    N04_MODELO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N04_BANCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    N04_AGENCI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    N04_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    N04_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    N04_GRAFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'N04010'
  });
};
