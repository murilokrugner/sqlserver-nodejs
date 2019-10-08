/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TQB010', {
    TQB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TQB_SOLICI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_TIPOSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQB_CODBEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    },
    TQB_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TQB_CENTRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_LOCALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_DTABER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQB_HOABER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TQB_USUARI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TQB_RAMAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TQB_SOLUCA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQB_CODMSS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_CDSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_FUNEXE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_DTFECH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQB_HOFECH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TQB_TEMPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TQB_CODMSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_CDSOLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TQB_CDEXEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    TQB_PRIORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQB_PSAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQB_PSAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQB_OBSPRA: {
      type: "IMAGE",
      allowNull: true
    },
    TQB_OBSATE: {
      type: "IMAGE",
      allowNull: true
    },
    TQB_POSCON: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQB_POSCO2: {
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
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQB_INTPRJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TQB_INTTSK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TQB_MMPRAZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_MMATEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_MEMODG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_TPSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQB_CRITIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TQB_SEQQUE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TQB_SATISF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TQB_DTCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TQB_HRCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TQB_FOTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    TQB_CDCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TQB_ORIGEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    TQB_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'TQB010'
  });
};
